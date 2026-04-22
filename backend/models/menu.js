import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true
  },

  day: {
    type: String,
    required: true
  },

  mealType: {
    type: String,
    enum: ["lunch", "dinner"],
    required: true
  },

  items: [
    {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String, // sabzi, dal, rice, etc
        required: true
      }
    }
  ]

}, { timestamps: true });

export default mongoose.model("Menu", menuSchema);