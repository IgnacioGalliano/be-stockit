const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: [true, 'Trasaction must belong to a product']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Trasaction must belong to a user']
  },
  quantity: {
    type: Number,
    min: 1,
    required: [true, "Please provide the quantity!"],
  },
  date: Date
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;