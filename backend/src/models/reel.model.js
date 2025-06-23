import mongoose from "mongoose";

const ReelSchema = mongoose.Schema(
    {
        title: {
        type: String,
        required: true
        },

        year: {
        type: Number,
        required: true
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
