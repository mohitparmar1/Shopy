import jwt from "jsonwebtoken";
import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";

const authLogin = async (req, res, next) => {
    try {
        const token = req.cookies.jwttoken;
        const verifyToken = jwt.verify(token, process.env.jwt_secret);
        const user = await userModel.findOne({ _id: verifyToken.id });
        if(!user){
            return res.status(401).json({ message: "User not found" });
        }
        else{
            next();
        }
    }
    catch (err) {
        res.status(501).json({ message: "Internal Server Error" });
    }
}

export { authLogin };