// routes/weather.js
import express from "express";
import { addWeather, getWeather, getHistory } from "../controllers/weatherController.js";

const router = express.Router();

router.post("/", addWeather);
router.get("/:city", getWeather);
router.get("/history/range", getHistory);

export default router;
