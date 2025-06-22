import mongoose from "mongoose";

const ReelSchema = mongoose.Schema(
    {
        title: {
        type: String,
        required: [true, "Enter a reel title"]
        },

        releaseYear: {
        type: Number,
        required: [true, "Enter the release year"]
        },

        image: {
        type: String,
        required: false
        }
    },
    {
        timestamps: true
    }
);

const Reel = mongoose.model("Reel", ReelSchema);

export default Reel;
