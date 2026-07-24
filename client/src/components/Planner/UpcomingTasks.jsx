function UpcomingTasks({ tasks }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Upcoming Tasks
      </h2>

      {tasks.length === 0 ? (
        <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-gray-300">
          <p className="text-sm text-gray-500">
            No upcoming tasks.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-xl border border-gray-100 p-3 transition-colors hover:bg-gray-50"
            >
              <p className="text-sm font-semibold text-gray-900">
                {task.title}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                  {task.subject}
                </span>

                <div className="text-right">
                  <p className="text-xs font-semibold text-blue-600">
                    {task.date}
                  </p>

                  <p className="text-xs text-gray-500">
                    {task.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UpcomingTasks;