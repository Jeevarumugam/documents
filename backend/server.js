const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Routes
const userRoutes = require("./routes/userRoutes");
const documentsRoutes = require("./routes/documentsRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// User API
app.use("/api/users", userRoutes);

// Document API
app.use("/api/documents", documentsRoutes);

// Test
app.get("/", (req, res) => {
  res.send("Document Management System Backend is running");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

// Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
