// Importing mongoose
import mongoose from "mongoose";
// Importing email-validator
import emailValidator from "email-validator";
// Importing bcrypt
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: function () {
      return emailValidator.validate(this.email);
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  }
});
userSchema.pre("save", async function (next) {
  try {
    const existingUser = await userModel.findOne({ email: this.email });
    if (existingUser) {
      const err = new Error("Email already exists");
      err.status = 400;
      return next(err);
    }

    next();
  } catch (error) {
    next(error);
  }
});
const userModel = new mongoose.model("user", userSchema);
export { userModel };

