import { postRegister } from "../controllers/signupController.js";

import express from "express";
const SignupRouter = express.Router();

SignupRouter.route("/").post(postRegister);

export { SignupRouter };