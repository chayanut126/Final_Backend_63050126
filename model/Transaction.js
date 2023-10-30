// Transaction.js
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  income: { type: Number, default: 0 },
  expense: { type: Number, default: 0 },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
