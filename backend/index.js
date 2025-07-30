require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require('./config');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 'your-frontend-domain.com' : 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
const mainRouter = require("./routes/index");

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'PayTM API is running',
    timestamp: new Date().toISOString()
  });
});

// Database connection
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ Connected to MongoDB successfully!");
    console.log(`🌐 Database: ${config.MONGODB_URI.split('@')[1]}`);
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error.message);
    console.log("\n🔧 Please check your MongoDB Atlas connection string and IP whitelist.");
    process.exit(1);
  });

app.use("/api/v1", mainRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/health`);
});
