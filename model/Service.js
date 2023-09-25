const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
  },
  discountPecentage: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  rating: {
    type: Number,
    default: 5,
    min: 0,
    max: 5,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  thumbnail: {
    type: "String",
    default: "",
  },
  images: [
    {
      type: String,
    },
  ],
});

serviceSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

serviceSchema.set("toJSON", {
  virtuals: true,
});

exports.Service = mongoose.model("Service", serviceSchema);
