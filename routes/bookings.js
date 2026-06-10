const multer = require("multer");
const { proofStorage, studentProofStorage } = require("../cloudConfig");
const uploadProof = multer({ storage: proofStorage });
const uploadStudentProofs = multer({
  storage: studentProofStorage,
});
const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const Razorpay = require("razorpay");

const Booking = require("../models/booking");
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middleware");

const razorpay =
  process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET
    ? new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      })
    : null;

// SEND BOOKING REQUEST
router.post("/request", isLoggedIn, uploadProof.single("collegeProof"), async (req, res, next) => {
  try {
   const {
  listingId,
  students,
  departure,
  collegeName,
  coordinatorName,
  phone,
  specialRequest
} = req.body;

    if (!listingId || !students || !departure) {
      return res.status(400).json({ error: "Missing booking details." });
    }

    const finalStudents = Number(students || 1);

    if (!finalStudents || finalStudents < 1) {
      return res.status(400).json({ error: "Invalid number of students." });
    }

    const listing = await Listing.findById(listingId);
    const existingBooking = await Booking.findOne({
  listing: listingId,
  user: req.user._id,
  departure: departure,
  status: { $in: ["pending", "low_booking", "payment_pending", "confirmed"] },
});

if (existingBooking) {
  return res.status(400).json({
    error: "You already have an active booking request for this tour and batch.",
  });
}

    if (!listing) {
      return res.status(404).json({ error: "Listing not found." });
    }

    const selectedBatch = (listing.departureBatches || []).find(
      (batch) => String(batch.date) === String(departure)
    );

    if (!selectedBatch) {
      return res.status(400).json({ error: "Selected departure batch not found." });
    }

    if (finalStudents > Number(selectedBatch.seats || 0)) {
      return res.status(400).json({ error: "Not enough seats available in selected batch." });
    }

    const pricePerPerson = Number(listing.pricePerPerson || listing.price || 0);
    const totalPrice = pricePerPerson * finalStudents;
   const maxSeats = Number(selectedBatch.maxSeats || selectedBatch.seats || 40);
const minSeats = Number(
  selectedBatch.minSeats && selectedBatch.minSeats <= maxSeats
    ? selectedBatch.minSeats
    : Math.ceil(maxSeats * 0.6)
);

const alreadyBooked = await Booking.aggregate([
  {
    $match: {
      listing: listing._id,
      departure: departure,
      status: { $in: ["pending", "low_booking", "payment_pending", "confirmed"] },
    },
  },
  {
    $group: {
      _id: null,
      totalStudents: { $sum: "$students" },
    },
  },
]);

const bookedStudents = Number(alreadyBooked[0]?.totalStudents || 0);
const projectedStudents = bookedStudents + finalStudents;

const initialStatus =
  projectedStudents >= minSeats ? "pending" : "low_booking";

const initialAdminNote =
  projectedStudents >= minSeats
    ? ""
    : `Minimum ${minSeats} students required. Current expected students: ${projectedStudents}.`;

const newBooking = new Booking({
  listing: listingId,
  user: req.user._id,
  students: finalStudents,
  departure: departure || "",
  collegeName: collegeName || "",
  coordinatorName: coordinatorName || "",
  phone: phone || "",
  specialRequest: specialRequest || "",
  totalPrice,
  status: initialStatus,
  paymentStatus: "pending",
  adminNote: initialAdminNote,
  cancelledBy: "",
  cancelReason: "",
  paymentId: "",
  orderId: "",
  collegeProof: {
  url: req.file ? req.file.path : "",
  filename: req.file ? req.file.filename : "",
},
verificationStatus: "not_verified",
});

    await newBooking.save();

    return res.status(200).json({
      success: true,
      message:
  initialStatus === "low_booking"
    ? `Booking request sent. Minimum ${minSeats} students required before approval.`
    : "Booking request sent successfully! Admin approval pending.",
      bookingId: newBooking._id,
    });
  } catch (err) {
    console.log("BOOKING REQUEST ERROR:", err);
    return res.status(500).json({
      error: "Could not send booking request.",
    });
  }
});

// MY BOOKINGS
router.get("/my", isLoggedIn, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("listing")
      .sort({ createdAt: -1 });

    res.render("bookings/index.ejs", {
      bookings,
      razorpayKey: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.log("BOOKINGS LOAD ERROR:", err);
    res.send("Error loading bookings");
  }
});

// CREATE RAZORPAY ORDER
router.post("/:id/create-order", isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findById(id).populate("listing");

    if (!booking) {
      return res.status(404).json({ error: "Booking not found." });
    }

    if (!booking.user.equals(req.user._id)) {
      return res.status(403).json({ error: "You are not allowed." });
    }

    if (booking.status !== "payment_pending") {
      return res.status(400).json({
        error: "Payment is allowed only after admin approval.",
      });
    }

    if (booking.paymentStatus === "paid") {
      return res.status(400).json({ error: "Payment already completed." });
    }

if (!razorpay) {
  console.log("RAZORPAY ENV MISSING:", {
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET ? "FOUND" : "MISSING",
  });

  return res.status(500).json({
    error: "Razorpay keys missing. Check .env file.",
  });
}

const amountInRupees = Number(booking.totalPrice || 0);

if (!amountInRupees || amountInRupees <= 0) {
  return res.status(400).json({
    error: "Invalid booking amount. totalPrice is 0 or missing.",
  });
}

const options = {
  amount: Math.round(amountInRupees * 100),
  currency: "INR",
  receipt: `rcpt_${booking._id.toString().slice(-20)}`,
  notes: {
    bookingId: booking._id.toString(),
    userId: req.user._id.toString(),
  },
};

const order = await razorpay.orders.create(options);

    booking.orderId = order.id;
    await booking.save();

    return res.status(200).json({
      success: true,
      key: process.env.RAZORPAY_KEY_ID,
      amount: options.amount,
      currency: options.currency,
      orderId: order.id,
      bookingId: booking._id,
      title: booking.listing?.title || "Tour Booking Payment",
      name: req.user.username || "Student",
      email: req.user.email || "",
      contact: "",
    });
  } catch (err) {
    console.log("CREATE ORDER ERROR:", err);
    return res.status(500).json({ error: "Could not create payment order." });
  }
});

// VERIFY PAYMENT
router.post("/:id/verify-payment", isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found." });
    }

    if (!booking.user.equals(req.user._id)) {
      return res.status(403).json({ error: "You are not allowed." });
    }

    if (booking.status !== "payment_pending") {
      return res.status(400).json({ error: "Booking is not approved for payment." });
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ error: "Payment verification failed." });
    }

    booking.paymentStatus = "paid";
    booking.status = "confirmed";
    booking.adminNote = "Payment received. Booking confirmed.";
    booking.paymentId = razorpay_payment_id;
    booking.orderId = razorpay_order_id;

    await booking.save();

    return res.status(200).json({
      success: true,
      message: "Payment successful and booking confirmed!",
    });
  } catch (err) {
    console.log("VERIFY PAYMENT ERROR:", err);
    return res.status(500).json({ error: "Could not verify payment." });
  }
});

// CANCEL BOOKING BY USER
router.delete("/:id", isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findById(id);

    if (!booking) {
      req.flash("error", "Booking not found.");
      return res.redirect("/bookings/my");
    }

    if (!booking.user.equals(req.user._id)) {
      req.flash("error", "You are not allowed!");
      return res.redirect("/bookings/my");
    }

    const listing = await Listing.findById(booking.listing);

    if (listing) {
      const batch = (listing.departureBatches || []).find(
        (item) => String(item.date) === String(booking.departure)
      );

      if (
        batch &&
        ["payment_pending", "paid", "confirmed"].includes(booking.status)
      ) {
        batch.seats += Number(booking.students || 0);
        await listing.save();
      }
    }

    booking.status = "cancelled";
    booking.cancelledBy = "user";
    booking.cancelReason = "Cancelled by user";

    await booking.save();

    req.flash("success", "Booking request cancelled!");
    res.redirect("/bookings/my");
  } catch (err) {
    console.log("DELETE BOOKING ERROR:", err);
    res.send("Error deleting booking");
  }
});
router.post("/:id/add-students", isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const { students } = req.body;

    const booking = await Booking.findById(id).populate("listing");

    if (!booking) {
      return res.status(404).send("Booking not found");
    }

    if (!booking.user.equals(req.user._id)) {
      return res.status(403).send("Not allowed");
    }

    // only allowed in pending / low_booking
    if (!["pending", "low_booking"].includes(booking.status)) {
      return res.status(400).send("Cannot modify booking");
    }

    const addStudents = Number(students || 0);
    if (addStudents < 1) {
      return res.status(400).send("Invalid number");
    }

    const listing = await Listing.findById(booking.listing);

    const batch = listing.departureBatches.find(
      b => String(b.date) === String(booking.departure)
    );

    if (!batch) {
      return res.status(400).send("Batch not found");
    }

const currentStudents = Number(booking.students || 0);
const finalStudentCount = currentStudents + addStudents;
const maxSeats = Number(batch.maxSeats || batch.seats || 40);

if (finalStudentCount > maxSeats) {
  req.flash(
    "error",
    `Only ${maxSeats} seats are allowed for this batch. You already have ${currentStudents} students.`
  );
  return res.redirect("/bookings/my");
}

// update students
booking.students = finalStudentCount;
// MIN SEATS LOGIC FIX
const minSeats = Number(
  batch.minSeats && batch.minSeats <= maxSeats
    ? batch.minSeats
    : Math.ceil(maxSeats * 0.6)
);

if (booking.students >= minSeats) {
  booking.status = "pending"; // ya "payment_pending" agar direct payment chahiye
  booking.adminNote = `Minimum seats reached (${booking.students}). Waiting for admin approval.`;
} else {
  booking.status = "low_booking";
  booking.adminNote = `Minimum ${minSeats} students required. Current expected students: ${booking.students}.`;
}

    // update price
    const pricePerPerson = Number(listing.pricePerPerson || listing.price || 0);
    booking.totalPrice = booking.students * pricePerPerson;

    await booking.save();

    req.flash("success", "Students updated successfully!");
    res.redirect("/bookings/my");

  } catch (err) {
    console.log("ADD STUDENTS ERROR:", err);
    res.send("Error updating students");
  }
});

router.get("/:id/student-details", isLoggedIn, async (req, res) => {
  try {

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      req.flash("error", "Booking not found");
      return res.redirect("/bookings/my");
    }

    const newStudents = Number(
      req.query.newStudents || booking.students || 1
    );

    res.render("bookings/studentDetails.ejs", {
      booking,
      newStudents,
    });

  } catch (err) {

    console.log(err);

    req.flash("error", "Error loading student form");

    res.redirect("/bookings/my");
  }
});

// SAVE STUDENT DETAILS
router.post(
  "/:id/student-details",
  isLoggedIn,
  uploadStudentProofs.array("studentProofs"),
  async (req, res) => {
    try {

      const booking = await Booking.findById(req.params.id);

      if (!booking) {
        req.flash("error", "Booking not found");
        return res.redirect("/bookings/my");
      }

const studentsData = [];

const fullNames = Array.isArray(req.body.fullName)
  ? req.body.fullName
  : [req.body.fullName];

const enrollmentNos = Array.isArray(req.body.enrollmentNo)
  ? req.body.enrollmentNo
  : [req.body.enrollmentNo];

const studentPhones = Array.isArray(req.body.studentPhone)
  ? req.body.studentPhone
  : [req.body.studentPhone];

for (let i = 0; i < fullNames.length; i++) {

  studentsData.push({

    fullName: fullNames[i] || "",

    enrollmentNo: enrollmentNos[i] || "",

    studentPhone: studentPhones[i] || "",

    studentIdProof: {
      url: req.files[i] ? req.files[i].path : "",
      filename: req.files[i] ? req.files[i].filename : "",
    },

    verificationStatus: "pending",
  });

}

      booking.studentsData = [
  ...(booking.studentsData || []),
  ...studentsData,
];
booking.students = booking.studentsData.length;

      await booking.save();

      req.flash(
        "success",
        "Student details uploaded successfully!"
      );

      res.redirect("/bookings/my");

    } catch (err) {

      console.log("STUDENT DETAILS ERROR:", err);

      req.flash(
        "error",
        "Could not upload student details"
      );

      res.redirect("/bookings/my");
    }
  }
);

module.exports = router;