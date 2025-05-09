// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import weatherRoutes from "./routes/weather.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/weather", weatherRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(5000, () => console.log("Server running on 5000"));
});
