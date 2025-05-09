// // utils/fetchWeather.js
// import axios from "axios";

// export const fetchWeatherFromAPI = async (city) => {
//   const res = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
//   );
//   const data = res.data;
//   return {
//     city,
//     temperature: data.main.temp,
//     description: data.weather[0].description,
//     icon: data.weather[0].icon,
//     feels_like: data.main.feels_like,
//     date: new Date(),
//   };
// };


// utils/fetchWeather.js
import axios from "axios";

export const fetchWeatherFromAPI = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  // Step 1: Current Weather
  const currentRes = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const currentData = currentRes.data;

  const { main, weather, coord } = currentData;
  const { lat, lon } = coord;

  // Step 2: 3-Hourly Forecast (Next 10 forecasts)
  const forecastRes = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );

  const now = new Date();

  const hourlyForecast = forecastRes.data.list.slice(0, 10).map((entry, index) => {
    const forecastTime = new Date(entry.dt * 1000);
    const hoursAhead = Math.round((forecastTime - now) / (1000 * 60 * 60));

    return {
      time: index === 0 ? "Now" : `In ${hoursAhead}h`,
      temperature: Math.round(entry.main.temp),
      condition: entry.weather[0].main,
      icon: entry.weather[0].icon
    };
  });

  // Step 3: Return merged data
  return {
    city,
    temperature: main.temp,
    description: weather[0].description,
    icon: weather[0].icon,
    feels_like: main.feels_like,
    date: new Date(),
    hourlyForecast
  };
};
