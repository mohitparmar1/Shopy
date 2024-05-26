import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { genSalt, hash, compare } = bcrypt;
const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      select: false,
    },
    role: {
      type: [String],
      default: ["user"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);

// Attachments : Genrating a JWT Token
UserSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

//   Encrypting the user Password
UserSchema.pre("save", function (next) {
  // gives the data of current user
  const user = this;

  //password is modified
  if (!user.isModified("password")) return next();

  //generate bcrypt salt : means mkaing encrypting password more stronger
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);

    // hash the password
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      // assigning hashed password
      user.password = hash;

      return next();
    });
  });
});

// Helper Function :
UserSchema.statics.isUserExist = async ({ email }) => {
  const isEmailExist = await UserModel.findOne({ email });

  if (isEmailExist) {
    // return res.status(404).json({
    //   success: false,
    //   message: "User already Exists...",
    // });
    throw new Error("User already Exists....");
  }
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  const user = await UserModel.findOne({ email }).select("password");

  if (!user) {
    // return res.status(404).json({
    //   success: false,
    //   message: "User does not Exists.... !",
    // });
    throw new Error("User does not Exists.... !");
  }

  // compare password
  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) {
    throw new Error("Invalid Credentials !!!");
  }

  return user;
};

const UserModel = mongoose.model("user", UserSchema);
export { UserModel };
