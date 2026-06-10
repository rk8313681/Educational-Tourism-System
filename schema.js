const Joi = require('joi');
const review = require('./models/review');

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),

    description: Joi.string().required(),

    location: Joi.string().required(),

    country: Joi.string().required(),

    price: Joi.number().min(0).allow(null),

    image: Joi.string().allow("", null),

    duration: Joi.string().allow("", null),

    pricePerPerson: Joi.number().min(0).allow(null),

    category: Joi.alternatives().try(
  Joi.string().allow("", null),
  Joi.array().items(Joi.string()),
  Joi.object()
),

   tourCode: Joi.string().allow("", null),
    packageType: Joi.string().allow("", null),

    startingPoint: Joi.string().allow("", null),

    availability: Joi.string().allow("", null),

    aboutLocation: Joi.string().allow("", null),

    inclusions: Joi.alternatives().try(
      Joi.array().items(Joi.string()),
      Joi.string().allow("")
    ),

    exclusions: Joi.alternatives().try(
      Joi.array().items(Joi.string()),
      Joi.string().allow("")
    ),

    tourHighlights: Joi.alternatives().try(
      Joi.array().items(Joi.string()),
      Joi.string().allow("")
    ),

    nearbyPlaces: Joi.alternatives().try(
      Joi.array().items(Joi.string()),
      Joi.string().allow("")
    ),

    cancellationPolicy: Joi.alternatives().try(
      Joi.array().items(Joi.string()),
      Joi.string().allow("")
    ),

    packagePolicy: Joi.alternatives().try(
      Joi.array().items(Joi.string()),
      Joi.string().allow("")
    ),
mealsIncluded: Joi.alternatives().try(
  Joi.boolean(),
  Joi.string().valid("on", "true", "false", "1", "0")
),

sightseeingIncluded: Joi.alternatives().try(
  Joi.boolean(),
  Joi.string().valid("on", "true", "false", "1", "0")
),

hotelIncluded: Joi.alternatives().try(
  Joi.boolean(),
  Joi.string().valid("on", "true", "false", "1", "0")
),

transportIncluded: Joi.alternatives().try(
  Joi.boolean(),
  Joi.string().valid("on", "true", "false", "1", "0")
),

    itinerary: Joi.any(),

    departureBatches: Joi.any(),

    meals: Joi.any(),

    hotel: Joi.any(),

    transport: Joi.any(),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating:
        Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
});