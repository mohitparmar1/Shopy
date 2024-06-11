import {postLogin} from '../controllers/loginController.js';
import express from "express"
import { authLogin } from '../middlewares/auth-helper.js';
const LoginRouter = express.Router();

LoginRouter.route('/').post(postLogin);

export {LoginRouter};