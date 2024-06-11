import {userModel} from "../models/userModel.js";
import bcrypt from "bcrypt";
const postRegister = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const data = await userModel.create({
      ...req.body,
    });
    console.log(data);
    res.status(201).json({message: "User Created"});
  } catch (err) {
    // console.log(err);
    res.status(400).json({ message: err.message });
  }
};
export { postRegister };
