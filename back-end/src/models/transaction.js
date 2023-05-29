const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  transactionType: {
    type: String,
    enum: ["Income", "Expenses"],
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const Transaction = mongoose.model("transactions", transactionSchema);
module.exports = Transaction;
