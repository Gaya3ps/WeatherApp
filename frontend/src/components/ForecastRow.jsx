const ForecastRow = ({ forecastData }) => {
  if (!forecastData || forecastData.length === 0) {
    return (
      <div className="bg-orange-200/40 rounded-2xl p-4 shadow text-center">
        <p className="text-sm text-gray-500">No forecast available.</p>
      </div>
    )
  }

  // Limit the number of items based on screen size
  // For mobile, show first 5 items
  const displayData = forecastData.slice(0, 10)

  return (
    <div className="bg-orange-200/40 rounded-2xl p-4 shadow">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 text-center">
        {displayData.map((f, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-xs sm:text-sm text-gray-800 p-1 rounded-lg ${i === 0 ? "bg-orange-100/60" : ""}`}
          >
            <div className="mb-1 font-medium">{f.time}</div>
            <div className="flex items-center gap-1 font-semibold">
              <img
                src={`https://openweathermap.org/img/wn/${f.icon}@2x.png`}
                alt={f.condition}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span>{f.temperature}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForecastRow
