// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // ✅ only URI, no options
        console.log("MongoDB Connected"); // <-- this message will appear on success
    } catch (error) {
        console.error("MongoDB Connection Failed", error);
    }
};

export default connectDB;
