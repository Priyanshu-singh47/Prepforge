function SubjectProgress({ subjects }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Subject Progress
      </h2>

      {subjects.length === 0 ? (
        <div className="flex h-32 items-center justify-center">
          <p className="text-sm text-gray-500">
            No progress available yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {subjects.map((subject) => (
            <div
              key={subject.shortName}
              className="rounded-lg border border-gray-200 bg-white px-3 py-3"
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {subject.shortName}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {subject.completed} / {subject.total} Completed
                  </p>
                </div>

                <span
                  className="text-sm font-bold"
                  style={{ color: subject.color }}
                >
                  {subject.percentage}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${subject.percentage}%`,
                    backgroundColor: subject.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SubjectProgress;