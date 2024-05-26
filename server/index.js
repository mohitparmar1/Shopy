import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { MensRouter } from "./routes/mens-route.js";
import connectDB from "./config/DBconnect.js";
import { WomensRouter } from "./routes/womens-route.js";
import { KidsRouter } from "./routes/kids-route.js";
import { authRouter } from "./routes/auth/authRoutes.js";

const app = express();

dotenv.config();

connectDB();

app.use(express.json());

app.use(morgan("dev"));

app.use(
  cors({
    origin: "https://shopy-mohitparmar1s-projects.vercel.app/",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/mens", MensRouter);
app.use("/api/v1/womens", WomensRouter);
app.use("/api/v1/kids", KidsRouter);

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
