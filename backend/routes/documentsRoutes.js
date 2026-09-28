const express = require("express");
const Document = require("../models/Documents");

const router = express.Router();

// Add Document
router.post("/", async (req, res) => {
  try {
    const { documentName } = req.body;

    const newDocument = new Document({
      documentName: documentName,
    });

    await newDocument.save();

    res.status(201).json({
      message: "Document added successfully",
      document: newDocument,
    });
  } catch (error) {
    console.log("ADD DOCUMENT ERROR:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// Get all Documents
router.get("/", async (req, res) => {
  try {
    const documents = await Document.find();

    res.status(200).json(documents);
  } catch (error) {
    console.log("GET DOCUMENT ERROR:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// Delete Document
router.delete("/:id", async (req, res) => {
  try {
    await Document.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Document deleted successfully",
    });
  } catch (error) {
    console.log("DELETE DOCUMENT ERROR:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;
