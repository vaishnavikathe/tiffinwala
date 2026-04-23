import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true
  },

  planId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan",
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
      name: String,
      type: String
    }
  ]

}, { timestamps: true });

export default mongoose.model("Menu", menuSchema);