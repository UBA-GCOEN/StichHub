import mongoose from "mongoose";

const userTailorSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile: { type: Number, required: true },
  role: {
    type: String,
    default: "tailor",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("TailorUsers", userTailorSchema);
