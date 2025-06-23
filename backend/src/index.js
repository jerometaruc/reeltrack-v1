import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import reelRoute from './routes/reel.route.js';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
    origin:"http://localhost:5173",
}));
app.use(express.json());

// Register reel-related routes under /api/reels
app.use("/api/reels", reelRoute);

// Root route for testing
app.get('/', (req, res) => {
    res.send("Hello from node API Server");
});

// Connect to MongoDB using the URI in .env
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on http://localhost:3000");
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
