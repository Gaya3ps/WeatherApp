const HistoryTable = ({ history, showTable }) => {
  if (!showTable) return null // Don't render anything until searched

  if (!history || history.length === 0) {
    return (
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No historical data found for the selected period.</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto mt-2 -mx-4 sm:mx-0 rounded-lg">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden shadow-sm rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th scope="col" className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 text-left">
                  Date
                </th>
                <th scope="col" className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 text-center">
                  Temp (°C)
                </th>
                <th scope="col" className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 text-center">
                  Feels Like
                </th>
                <th scope="col" className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {history.map((entry, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-2 px-3 sm:px-4 text-xs sm:text-sm text-gray-700">
                    {new Date(entry.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-3 sm:px-4 text-xs sm:text-sm text-gray-700 text-center">
                    {Math.round(entry.temperature)}
                  </td>
                  <td className="py-2 px-3 sm:px-4 text-xs sm:text-sm text-gray-700 text-center">
                    {Math.round(entry.feels_like)}
                  </td>
                  <td className="py-2 px-3 sm:px-4 text-xs sm:text-sm text-gray-700 capitalize">{entry.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HistoryTable
