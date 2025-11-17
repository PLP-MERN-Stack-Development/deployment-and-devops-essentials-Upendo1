const connectDB = require("./config/db");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",  // Vite frontend
  credentials: true
}));

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

// Load task routes if you have them
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// Connect to MongoDB

const PORT = process.env.PORT;
const startServer = async () => {
  try {
    await connectDB(); // wait until MongoDB is connected
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

startServer();
