function DifficultyProgress({ difficulty }) {
  const levels = ["Easy", "Medium", "Hard"];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-lg">
      <h2 className="mb-5 text-lg font-semibold text-gray-900">
        Difficulty Progress
      </h2>

      <div className="space-y-5">
        {levels.map((level) => {
          const item = difficulty[level];

          return (
            <div
              key={level}
              className="group rounded-lg p-2 transition-all duration-200 hover:bg-blue-50"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-gray-700 transition-colors duration-200 group-hover:text-blue-600">
                  {level}
                </span>

                <span className="text-sm text-gray-500">
                  {item.completed}/{item.total}
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-300"
                  style={{
                    width: `${item.percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DifficultyProgress;