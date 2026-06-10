const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema(
  {
    day: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: "",
      trim: true,
    },
    subtitle: {
      type: String,
      default: "",
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    stay: {
      type: String,
      default: "",
      trim: true,
    },

    meals: {
      type: [String],
      default: [],
    },

    activities: {
      type: [String],
      default: [],
    },

    transport: {
      from: {
        type: String,
        default: "",
        trim: true,
      },
      to: {
        type: String,
        default: "",
        trim: true,
      },
      mode: {
        type: String,
        enum: ["", "bus", "car"],
        default: "",
      },
      distance: {
        type: String,
        default: "",
        trim: true,
      },
      time: {
        type: String,
        default: "",
        trim: true,
      },
    },
  },
  { _id: false }
);

const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      url: {
        type: String,
        default:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      },
      filename: {
        type: String,
        default: "default",
      },
    },

    price: {
      type: Number,
      default: 0,
    },

    pricePerPerson: {
      type: Number,
      default: 0,
      min: 0,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      default: "India",
      trim: true,
    },

    duration: {
      type: String,
      default: "",
      trim: true,
    },

    packageType: {
      type: String,
      default: "",
      trim: true,
    },

category: {
  type: String,
  enum: [
    "school",
    "college",
    "industrial",
    "science",
    "government",
    "career",
    "Educational Tour"
  ],
  default: "college",
},

    tourCode: {
      type: String,
      default: "",
      trim: true,
    },

    startingPoint: {
      type: String,
      default: "",
      trim: true,
    },

    availability: {
      type: String,
      enum: ["available", "on-request", "sold-out", ""],
      default: "available",
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],

    aboutLocation: {
      type: String,
      default: "",
      trim: true,
    },

    nearbyPlaces: {
      type: [String],
      default: [],
    },

    mealsIncluded: {
      type: Boolean,
      default: false,
    },

    sightseeingIncluded: {
      type: Boolean,
      default: false,
    },

    hotelIncluded: {
      type: Boolean,
      default: false,
    },

    transportIncluded: {
      type: Boolean,
      default: false,
    },

    hotel: {
      hotelName: {
        type: String,
        default: "",
        trim: true,
      },
      roomType: {
        type: String,
        default: "",
        trim: true,
      },
      nights: {
        type: Number,
        default: 0,
        min: 0,
      },
      hotelAddress: {
        type: String,
        default: "",
        trim: true,
      },
      stayNotes: {
        type: String,
        default: "",
        trim: true,
      },
    },

    meals: {
      breakfast: {
        type: Boolean,
        default: false,
      },
      lunch: {
        type: Boolean,
        default: false,
      },
      dinner: {
        type: Boolean,
        default: false,
      },
      mealPlan: {
        type: String,
        default: "",
        trim: true,
      },
    },

    transport: {
      type: {
        type: String,
        enum: ["", "bus", "car"],
        default: "",
      },
      vehicleName: {
        type: String,
        default: "",
        trim: true,
      },
      capacity: {
        type: Number,
        default: 0,
        min: 0,
      },
      pickupPoint: {
        type: String,
        default: "",
        trim: true,
      },
      dropPoint: {
        type: String,
        default: "",
        trim: true,
      },
      driverIncluded: {
        type: Boolean,
        default: true,
      },
      fuelIncluded: {
        type: Boolean,
        default: true,
      },
    },
departureBatches: {
  type: [
    {
      date: String,

      // Total capacity of this batch
      maxSeats: {
        type: Number,
        default: 40,
        min: 1,
      },

      // Available seats left
      seats: {
        type: Number,
        default: 40,
        min: 0,
      },

      // Minimum students required to run this tour
      minSeats: {
        type: Number,
        default: 25,
        min: 1,
      },
    }
  ],
  default: []
},
    inclusions: {
      type: [String],
      default: [],
    },

    exclusions: {
      type: [String],
      default: [],
    },

    tourHighlights: {
      type: [String],
      default: [],
    },

    packagePolicy: {
      type: [String],
      default: [],
    },

    cancellationPolicy: {
      type: [String],
      default: [],
    },

    itinerary: {
      type: [itinerarySchema],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Listing", listingSchema);