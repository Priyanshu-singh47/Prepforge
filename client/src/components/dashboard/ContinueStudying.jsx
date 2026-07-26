import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ContinueStudying({ dashboardData }) {
  const navigate = useNavigate();

  const task = dashboardData?.planner?.[0];

  if (!task) {
    return (
      <div className="flex w-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Continue Studying
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          No upcoming tasks. Add one from the Planner.
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Continue Studying
        </h2>

        <p className="text-sm text-gray-500">
          Your next planned task
        </p>
      </div>

      <div className="flex flex-1 items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {task.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>

          <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
            {task.priority}
          </span>
        </div>

        <button
          onClick={() => navigate("/planner")}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
        >
          Open Planner
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default ContinueStudying;