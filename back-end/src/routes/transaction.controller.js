const express = require("express");
const Transaction = require("../models/transaction");
const router = express.Router();

// GET request to get all transactions
router.get("/", async (req, res) => {
  try {
    //console.log("get all transaction called");
    const result = await Transaction.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET request to get a single transaction by id
router.get("/:id", async (req, res) => {
  try {
    //console.log("get transaction by id called");
    const id = req.params.id;
    const result = await Transaction.findById(id);
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// PUT request to update a single transaction by id
router.put("/:id", async (req, res) => {
  try {
    //console.log("update transaction by id called");
    const transactionId = req.params.id;
    const updateTransaction = req.body;
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      transactionId,
      updateTransaction,
      {
        new: true,
      }
    );
    if (!updatedTransaction) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.send({
      message: "Transaction Updated Successfully",
      data: updatedTransaction,
    });
  } catch (error) {
    console.error("Error updating transaction:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST request to create a new transaction
router.post("/create", async (req, res) => {
  try {
    //console.log("create transaction called");
    const transaction = new Transaction(req.body);
    const result = await transaction.save();
    res.send({
      message: "Transaction data saved successfully",
      data: result,
    });
  } catch (error) {
    res.send("Transaction data not saved");
  }
});

// DELETE request to delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    const transactionId = req.params.id;
    const deletedTransaction = await Transaction.findByIdAndDelete(
      transactionId
    );

    if (!deletedTransaction) {
      return res.status(404).send({ error: "Product not found" });
    }

    res.send({
      message: "Transaction deleted successfully",
      data: deletedTransaction,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
