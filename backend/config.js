require('dotenv').config();

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || "varshithsecret_fallback",
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/paytm",
  PORT: process.env.PORT || 3000
};
