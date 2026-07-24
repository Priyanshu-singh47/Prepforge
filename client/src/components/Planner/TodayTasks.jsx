import { CheckCircle2, Circle } from "lucide-react";

function TodayTasks({ tasks }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Today's Tasks
      </h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-xl border border-gray-100 p-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {task.completed ? (
                  <CheckCircle2
                    size={18}
                    className="text-green-600"
                  />
                ) : (
                  <Circle
                    size={18}
                    className="text-gray-400"
                  />
                )}

                <div>
                  <p
                    className={`font-medium text-sm ${
                      task.completed
                        ? "line-through text-gray-500"
                        : "text-gray-900"
                    }`}
                  >
                    {task.title}
                  </p>

                  <p className="text-xs text-gray-500">
                    {task.subject}
                  </p>
                </div>
              </div>

              <button
                className={`rounded-lg px-3 py-1 text-xs font-medium ${
                  task.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {task.completed ? "Done" : "Complete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodayTasks;