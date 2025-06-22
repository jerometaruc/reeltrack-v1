import Reel from '../models/reel.model.js';

// Get all reels
// Endpoint: GET /api/reels
const getReels = async (req, res) => {
    try {
        const reels = await Reel.find({});
        res.status(200).json(reels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new reel
// Endpoint: POST /api/reels
const postReel = async (req, res) => {
    try {
        const reel = await Reel.create(req.body);
        res.status(200).json(reel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a reel
// Endpoint: PUT /api/reels/:id
const putReel = async (req, res) => {
    try {
        const { id } = req.params;
        const reel = await Reel.findByIdAndUpdate(id, req.body);
        if (!reel) {
            return res.status(404).json({ message: "Reel not found" });
        }
        const updatedReel = await Reel.findById(id);
        res.status(200).json(updatedReel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a reel
// Endpoint: Delete /api/reels/:id
const deleteReel = async (req, res) => {
    try {
        const { id } = req.params;
        const reel = await Reel.findByIdAndDelete(id);
        if (!reel) {
            return res.status(404).json({ message: "Reel not found" });
        }
        res.status(200).json({ message: "Reel deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getReels,
    postReel,
    putReel,
    deleteReel
};

