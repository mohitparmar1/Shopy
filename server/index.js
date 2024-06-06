
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { MensRouter } from './routes/mens-route.js';
import connectDB from './config/DBconnect.js';
import { authRouter } from "./routes/auth/authRoutes.js";
import { WomensRouter } from './routes/womens-route.js';
import {LoginRouter} from "./routes/loginRoute.js";
import {SignupRouter} from './routes/signupRoute.js';
import { KidsRouter } from './routes/kids-route.js';
import StripeRouter from './routes/Stripe-route.js';
import cookieParser from 'cookie-parser';


const app = express();


dotenv.config();


connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'))

app.use(cors({
    origin: process.env.CORS_ORIGIN || "https://shopy-mohitparmar1s-projects.vercel.app/",
    methods:['GET','POST'],
    credentials:true,
  }))

app.use(express.urlencoded({extended:false}));

app.use("/api/v1/auth", authRouter);
app.use('/api/v1/mens',MensRouter);
app.use('/api/v1/womens',WomensRouter);
app.use('/api/v1/kids',KidsRouter);
app.use('/api/v1/signup',SignupRouter);
app.use('/api/v1/login',LoginRouter);
app.use('/api',StripeRouter);
const port=process.env.PORT||7000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

