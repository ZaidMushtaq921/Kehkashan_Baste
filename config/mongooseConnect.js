const mongoose = require("mongoose");
const debug = require("debug")("dev:mongoose")
const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
       debug("MongoDB connected successfully");
    } catch (error) {
       debug("MongoDB connection error:", error);
        process.exit(1); 
    }
};

module.exports = connectDB;