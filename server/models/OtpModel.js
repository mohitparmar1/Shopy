import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60, // Set expiration time in seconds (e.g., 60 seconds)
  },
});

const OtpModel = mongoose.model("otp", OtpSchema);
export { OtpModel };
