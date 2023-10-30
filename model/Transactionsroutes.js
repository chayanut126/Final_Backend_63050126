// transactionsRoutes.js
const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// GET all transactions
router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a transaction
router.post("/transactions", async (req, res) => {
  const { title, income, expense } = req.body;

  try {
    const newTransaction = new Transaction({ title, income, expense });
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// More routes: GET by ID, PUT, DELETE...

module.exports = router;
