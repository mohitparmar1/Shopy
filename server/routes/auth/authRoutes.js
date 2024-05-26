import express from "express";
// import passport from "passport";
// import { UserModel } from "../../models/userModel";
// import { authenticateJWT } from "../../config/JWTAuthentication";
import {
  forgotPassword,
  setNewPassword,
  verifyAndResetPassword,
} from "../../controllers/auth/authController.js";

const authRouter = express.Router();

authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/verify/password-otp", verifyAndResetPassword);
authRouter.post("/reset/set-new-password", setNewPassword);
export { authRouter };
