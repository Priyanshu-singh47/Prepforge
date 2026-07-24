function WeeklyActivity({ weeklyActivity }) {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const maxValue = Math.max(...weeklyActivity);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-lg">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Weekly Activity
      </h2>

      <div className="flex h-44 items-end justify-between gap-2">
        {weeklyActivity.map((value, index) => (
          <div
            key={index}
            className="group flex flex-1 flex-col items-center"
          >
            <div
              className="w-full rounded-t-md bg-blue-600 transition-all duration-200 group-hover:bg-blue-700 group-hover:scale-y-105"
              style={{
                height: `${(value / maxValue) * 105}px`,
              }}
            />

            <span className="mt-2 text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:text-blue-600">
              {days[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyActivity;