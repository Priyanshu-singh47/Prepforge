function SubjectProgress({ subjects }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Subject Progress
      </h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2.5"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-800">
                {subject.name}
              </h3>

              <span className="text-xs font-semibold text-blue-600">
                {subject.progress}%
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-1.5 rounded-full bg-blue-600 transition-all duration-300"
                style={{
                  width: `${subject.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectProgress;