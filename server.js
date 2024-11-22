const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const connectToDatabase = require('./config/db');  // Corrected import

// Initialize dotenv to load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors());  // Enable Cross-Origin Request Sharing
app.use(express.json());  // Parse incoming JSON data

// Connect to MongoDB
connectToDatabase();  // Ensure this function works correctly

// Use the routes
app.use('/api', authRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
