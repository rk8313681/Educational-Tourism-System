const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    listing: {
      type: Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    students: {
      type: Number,
      default: 1,
      min: 1,
      required: true,
    },

    collegeName: {
  type: String,
  default: "",
  trim: true,
},

coordinatorName: {
  type: String,
  default: "",
  trim: true,
},

phone: {
  type: String,
  default: "",
  trim: true,
},

specialRequest: {
  type: String,
  default: "",
  trim: true,
},

    departure: {
      type: String,
      default: "",
      trim: true,
    },

    totalPrice: {
      type: Number,
      default: 0,
      min: 0,
    },

status: {
  type: String,
  enum: [
    "pending",
    "low_booking",
    "payment_pending",
    "paid",
    "confirmed",
    "completed",
    "cancelled",
    "refund_requested",
    "refund_approved",
    "refund_rejected",
    "reschedule_requested",
    "rescheduled"
  ],
  default: "pending",
},

paymentStatus: {
  type: String,
  enum: ["pending", "paid"],
  default: "pending",
},

    paymentId: {
      type: String,
      default: "",
      trim: true,
    },

    orderId: {
      type: String,
      default: "",
      trim: true,
    },
  adminNote: {
  type: String,
  default: "",
},

cancelledBy: {
  type: String,
  enum: ["user", "admin", ""],
  default: "",
},

cancelReason: {
  type: String,
  default: "",
},
collegeProof: {
  url: {
    type: String,
    default: "",
  },
  filename: {
    type: String,
    default: "",
  },
},

verificationStatus: {
  type: String,
  enum: ["not_verified", "verified"],
  default: "not_verified",
},

finalDecision: {
  type: String,
  enum: [
    "waiting",
    "rescheduled",
    "refund_initiated",
    "proceed_anyway",
    "confirmed"
  ],
  default: "waiting",
},

decisionDate: {
  type: Date,
},

rescheduledDeparture: {
  type: String,
  default: "",
},

refundStatus: {
  type: String,
  enum: ["none", "requested", "approved", "rejected", "processed"],
  default: "none",
},

refundPercent: {
  type: Number,
  default: 0,
},

refundAmount: {
  type: Number,
  default: 0,
},

refundReason: {
  type: String,
  default: "",
  trim: true,
},

refundPolicyNote: {
  type: String,
  default: "",
  trim: true,
},

rescheduleStatus: {
  type: String,
  enum: ["none", "requested", "approved", "rejected"],
  default: "none",
},

oldDeparture: {
  type: String,
  default: "",
  trim: true,
},

requestedDeparture: {
  type: String,
  default: "",
  trim: true,
},

rescheduleReason: {
  type: String,
  default: "",
  trim: true,
},
studentsData: [
  {
    fullName: {
      type: String,
      trim: true,
      default: "",
    },

    enrollmentNo: {
      type: String,
      trim: true,
      default: "",
    },

    studentPhone: {
      type: String,
      trim: true,
      default: "",
    },

    studentIdProof: {
      url: {
        type: String,
        default: "",
      },

      filename: {
        type: String,
        default: "",
      },
    },

    verificationStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);