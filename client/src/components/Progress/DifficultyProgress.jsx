function DifficultyProgress({ difficulty }) {
  const levels = ["Easy", "Medium", "Hard"];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">

      <h2 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
        Difficulty Progress
      </h2>


      <div className="space-y-5">

        {levels.map((level) => {

          const item = difficulty[level];

          return (
            <div
              key={level}
              className="group rounded-lg p-2 transition hover:bg-blue-50 dark:hover:bg-gray-700"
            >

              <div className="mb-2 flex items-center justify-between">

                <span className="font-medium text-gray-700 group-hover:text-blue-600 dark:text-gray-300">
                  {level}
                </span>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.completed}/{item.total}
                </span>

              </div>


              <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">

                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-300"
                  style={{
                    width:`${item.percentage}%`,
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