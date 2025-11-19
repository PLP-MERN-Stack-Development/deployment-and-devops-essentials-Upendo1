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
<<<<<<< HEAD



// Connect DB
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
=======
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

>>>>>>> 7b8ae07c1051406c806cfcbc5610c31267794dac
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
