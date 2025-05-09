// controllers/weatherController.js
import Weather from "../models/Weather.js";
import { fetchWeatherFromAPI } from "../utils/fetchWeather.js";

export const addWeather = async (req, res) => {
  try {
    const { city } = req.body;
    const data = await fetchWeatherFromAPI(city);
    console.log(data)
    const saved = await new Weather(data).save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
};

export const getWeather = async (req, res) => {
  try {
    const { city } = req.params;
    const weather = await Weather.findOne({ city }).sort({ date: -1 });
    res.json(weather);
  } catch (err) {
    res.status(500).json({ error: "Failed to get weather" });
  }
};

export const getHistory = async (req, res) => {
  try {
    const { city, from, to } = req.query;
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const diff = (toDate - fromDate) / (1000 * 60 * 60 * 24);

    if (diff > 30) return res.status(400).json({ error: "Max range is 30 days" });

    const history = await Weather.find({
      city,
      date: { $gte: fromDate, $lte: toDate },
    }).sort({ date: -1 });

    res.json(history);
  } catch (err) {
    res.status(500).json({ error: "Failed to get history" });
  }
};
