import {userModel} from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const postLogin=async (req,res)=>{
    try {   
        if(req.body.authType===true){
            const user=await userModel.findOne({ email: req.body.email });
            if(!user){
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const pass= req.body.password;
                req.body.password = hashedPassword;
                const data = await userModel.create({
                  email:req.body.email,
                  password:req.body.password
                });
                req.body.password=pass
            }
        }
        const currentUser = await userModel.findOne({ email: req.body.email });
        if (currentUser) {
            const isPasswordCorrect = bcrypt.compareSync(
                req.body.password,
                currentUser.password
            );
            if (isPasswordCorrect) {
                const token = jwt.sign(
                  { id: currentUser._id },
                  process.env.JWT_SECRET
                );
                res.cookie('jwttoken', token, {
                    httpOnly: false,
                    maxAge: 24 * 60 * 60 * 10
                  });
                return res.status(200).json({ message: "Login Successfully"});
            } else {
                return res.status(400).json({ message: "Password is Incorrect" });
            }
        }
        else {
            return res.status(400).json({ message: "User not found" });
        }
    }
    catch (err) {
        res.status(500).json({ message:"server error" });
    }
}
export { postLogin };