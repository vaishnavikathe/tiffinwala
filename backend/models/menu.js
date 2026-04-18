import mongoose from "mongoose";

const dayMenuSchema = new mongoose.Schema({
  lunch: {
    type: [String],
    default: []
  },
  dinner: {
    type: [String],
    default: []
  }
}, { _id: false });
const menuSchema = new mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
    unique: true   // one menu per vendor
  },

  weekMenu: {
    Monday: dayMenuSchema,
    Tuesday: dayMenuSchema,
    Wednesday: dayMenuSchema,
    Thursday: dayMenuSchema,
    Friday: dayMenuSchema,
    Saturday: dayMenuSchema,
    Sunday: dayMenuSchema
  }

},{timestamps : true});

export default mongoose.model('menu',menuSchema);