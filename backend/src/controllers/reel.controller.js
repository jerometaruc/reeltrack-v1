import mongoose from "mongoose";
import Reel from '../models/reel.model.js';

// Get all reels
// Endpoint: GET /api/reels
const getReels = async (req, res) => {
    try {
        const reels = await Reel.find({});
        res.status(200).json({ success: true, data: reels });
    } catch (error) {
        console.log("Error in getting reels:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Get a reel by ID
// Endpoint: GET /api/reels/:id
const getReel = async (req, res) => {
    try {
        const { id } = req.params;
        const reel = await Reel.findById(id);
        res.status(200).json({ success: true, data: reel });
    } catch (error) {
        console.log("Error in getting reel:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
};

// Create a new reel
// Endpoint: POST /api/reels
const postReel = async (req, res) => {
    const reel = req.body;
    if(!reel.title || !reel.year) {
        return res.status(400).json({ success: false, message: "Fill all required fields" });
    }
    const newReel = new Reel(reel);
    try {
        await newReel.save();
        res.status(201).json({ success: true, data: newReel });
    } catch (error) {
        console.error("Error in creating reel:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Update a reel
// Endpoint: PUT /api/reels/:id
const putReel = async (req, res) => {
    const { id } = req.params;
    const reel = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Reel ID" });
    }
    try {
        const updatedReel = await Reel.findByIdAndUpdate(id, reel, { new: true });
        if(!updatedReel) {
            return res.status(404).json({ success: false, message: "Reel not found" });
        }
        res.status(200).json({ success: true, data: updatedReel });
    } catch (error) {
        console.error("Error in updating reel:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Delete a reel
// Endpoint: Delete /api/reels/:id
const deleteReel = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Reel ID" });
    }
    try {
        const deletedReel = await Reel.findByIdAndDelete(id);
        if(!deletedReel) {
            return res.status(404).json({ success: false, message: "Reel not found" });
        }
        res.status(200).json({ success: true, message: "Reel successfully deleted" });
    } catch (error) {
        console.error("Error in deleting reel:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export {
    getReels,
    getReel,
    postReel,
    putReel,
    deleteReel
};
