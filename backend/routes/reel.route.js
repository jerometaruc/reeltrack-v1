import express from 'express';
import {
    getReels,
    postReel,
    putReel,
    deleteReel
} from '../controllers/reel.controller.js';

const router = express.Router();

// Get all reels
// Endpoint: GET /api/reels
router.get('/', getReels);

// Create a new reel
// Endpoint: POST /api/reels
router.post('/', postReel);

// Update a reel
// Endpoint: PUT /api/reels/:id
router.put('/:id', putReel);

// Delete a reel
// Endpoint: Delete /api/reels/:id
router.delete('/:id', deleteReel);

export default router;