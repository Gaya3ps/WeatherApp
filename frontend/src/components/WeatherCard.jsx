import { Sun } from "lucide-react"

const WeatherCard = ({ data }) => {
  if (!data) return null

  const date = new Date(data.date)
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })

  return (
    <div className="text-center w-full">
      {/* Header */}
      <h2 className="text-md text-orange-700 font-medium mb-2">Today ⌄</h2>

      {/* Icon and Temperature */}
      <div className="flex items-center justify-center gap-4 mb-2">
        {data.icon ? (
          <img
            src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
            alt={data.description}
            className="w-12 h-12"
          />
        ) : (
          <Sun className="w-10 h-10 text-orange-500" />
        )}
        <div className="text-4xl sm:text-5xl font-bold text-orange-600">{Math.round(data.temperature)}°</div>
      </div>

      {/* Description */}
      <div className="text-lg font-medium text-orange-700 capitalize mb-1">{data.description}</div>

      {/* Location and Date */}
      <p className="text-sm text-orange-600">{data.city}</p>
      <p className="text-sm text-orange-600 mb-2">{formattedDate}</p>

      {/* Feels Like and Sunset */}
      <p className="text-sm text-orange-600">Feels like {Math.round(data.feels_like)}° | Sunset 18:20</p>
    </div>
  )
}

export default WeatherCard
