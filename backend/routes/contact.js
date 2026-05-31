const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

// POST /api/contact
router.post("/", async (req, res) => {
  console.log("BODY RECEIVED:", req.body);

  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create new document
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save to MongoDB
    await newContact.save();

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
