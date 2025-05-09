import mongoose from "mongoose";

const hourlyForecastSchema = new mongoose.Schema({
  time: String,
  temperature: Number,
  condition: String,
  icon: String,
});

const weatherSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  description: String,
  icon: String,
  feels_like: Number,
  date: Date,
  hourlyForecast: [hourlyForecastSchema],
});

export default mongoose.model("Weather", weatherSchema);
