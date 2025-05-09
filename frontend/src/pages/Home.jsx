import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, fetchHistory } from "../features/weatherSlice";
import WeatherCard from "../components/WeatherCard";
import ForecastRow from "../components/ForecastRow";
import HistoryTable from "../components/HistoryTable";
import bgImage from "../assets/image.JPG";

const allowedCities = [
  "Delhi",
  "Moscow",
  "Paris",
  "New York",
  "Sydney",
  "Riyadh",
];

const Home = () => {
  const dispatch = useDispatch();
  const { current, history, status, error } = useSelector(
    (state) => state.weather
  );

  const [city, setCity] = useState("Delhi");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [city, dispatch]);

  const handleHistorySearch = () => {
    if (!fromDate || !toDate) return alert("Please select both dates.");

    const from = new Date(fromDate);
    const to = new Date(toDate);
    const diffDays = (to - from) / (1000 * 60 * 60 * 24);

    if (diffDays > 30) {
      alert("Date range should not exceed 30 days.");
      return;
    }

    dispatch(fetchHistory({ city, from: fromDate, to: toDate }));
    setHasSearched(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Light transparent overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Main content wrapper */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left: Weather Card in peach box */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="bg-orange-100 rounded-3xl p-4 sm:p-6 w-full max-w-sm shadow-md self-start">
              {/* Dropdown on top */}
              <div className="mb-4">
                <select
                  className="w-full px-4 py-2 rounded bg-white shadow text-sm sm:text-base"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  {allowedCities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              {/* Weather Card Content */}
              <WeatherCard data={current} />
            </div>
          </div>

          {/* Right: Forecast + Random Text + History */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
            {/* Forecast Row */}
            <ForecastRow forecastData={current?.hourlyForecast} />

            {/* Text & History Filter */}
            <div className="bg-white/60 rounded-2xl p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-2">Random Text</h2>
              <p className="text-sm leading-relaxed text-gray-800 mb-6">
                Improve him believe opinion offered met and end cheered forbade.
                Friendly as stronger speedily by recurred. Son interest wandered
                sir addition end say. Manners beloved affixed picture men ask.
              </p>

              {/* History Filter */}
              <h3 className="text-md font-semibold mb-3">
                Filter Historical Data
              </h3>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-none sm:flex gap-2 sm:gap-3 flex-1">
                  <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="px-3 py-2 border rounded text-sm w-full"
                    placeholder="From"
                  />
                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="px-3 py-2 border rounded text-sm w-full"
                    placeholder="To"
                  />
                </div>
                <button
                  onClick={handleHistorySearch}
                  className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-colors"
                >
                  Search
                </button>
              </div>

              {/* History Table */}
              <HistoryTable history={history} showTable={hasSearched} />

              {/* Error Message */}
              {error && (
                <div className="text-red-600 mt-4 text-center p-2 bg-red-50 rounded">
                  Error: {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
