const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  upc: {
    type: String,
    required: [true, "Please provide the unique product code"],
    unique: true
  },
  name: {
    type: String,
    required: [true, "Please provide the product name!"]
  },
  description: {
    type: String,
    required: [true, "Please provide the product name!"]
  },
  photo: {
    type: String,
  },
  quantity: {
    type: Number,
    min: 1,
    required: [true, "Please provide the amount in any unity!"]
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;