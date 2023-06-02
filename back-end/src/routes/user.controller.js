const express = require("express");
const User = require("../models/user");
const router = express.Router();

// GET request to get all users
router.get("/all", async (req, res) => {
  try {
    //console.log("get all user called");
    const result = await User.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET request to get a single user by id
router.get("/:id", async (req, res) => {
  try {
    //console.log("get user by id called");
    const id = req.params.id;
    const result = await User.findById(id);
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// PUT request to update a single user by id
router.put("/:id", async (req, res) => {
  try {
    //console.log("update user by id called");
    const userId = req.params.id;
    const updateUser = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updateUser, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.send({ message: "User Updated Successfully", data: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST request to create a new user
router.post("/create", async (req, res) => {
  try {
    //console.log("create user called");
    const user = new User(req.body);
    const result = await user.save();
    res.send({
      message: "User data saved successfully",
      data: result,
    });
  } catch (error) {
    res.send("User data not saved");
  }
});

// DELETE request to delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).send({ error: "Product not found" });
    }

    res.send({ message: "User deleted successfully", data: deletedUser });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
