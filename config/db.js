const mongoose = require('mongoose');
require('dotenv').config();

// Function to connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process if MongoDB connection fails
  }
}

// Export the function
module.exports = connectToDatabase;
