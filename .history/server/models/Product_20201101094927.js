const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      default: [],
    },
    gender: {
      type: Number,
      default: 1,
    },
    category: {
      type: Number,
      default: 1,
    },
    quantitySmall: {
      type: Number,
      default: 0,
    },
    quantityMedium: {
      type: Number,
      default: 0,
    },
    quantityLarge: {
      type: Number,
      default: 0,
    },
    quantityXL: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      maxlength: 1000,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
