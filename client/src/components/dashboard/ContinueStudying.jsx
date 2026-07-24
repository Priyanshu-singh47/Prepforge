import { ArrowRight } from "lucide-react";
import { dashboardData } from "../../mock/dashboardData";

function ContinueStudying() {
  const focus = dashboardData.todayFocus;
  const learning = dashboardData.continueLearning;

  const progress = (focus.completed / focus.total) * 100;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">

      {/* Header */}

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Continue Studying
        </h2>

        <p className="text-sm text-gray-500">
          Pick up where you left off
        </p>
      </div>

      <div className="grid grid-cols-5 gap-4">

        {/* Left */}

        <div className="col-span-3 border-r border-slate-300 pr-4">

          <h3 className="text-lg font-semibold text-gray-900">
            {focus.subject}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {focus.topic}
          </p>

          <div className="mt-5">

            <div className="mb-2 flex w-4/5 justify-between text-xs text-gray-500">
              <span>
                {focus.completed}/{focus.total} Tasks
              </span>

              <span>
                {Math.round(progress)}%
              </span>
            </div>

            <div className="h-2.5 w-4/5 rounded-full bg-gray-200">
              <div
                className="h-2.5 rounded-full bg-blue-600 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

          </div>

          <button className="mt-5 flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">

            Continue

            <ArrowRight size={16} />

          </button>

        </div>

        {/* Right */}

        <div className="col-span-2 flex flex-col justify-between pl-2">

          <div>

            <h3 className="text-lg font-semibold text-gray-900">
              {learning.topic}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {learning.subject}
            </p>

          </div>

          <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700">

            Resume

            <ArrowRight size={16} />

          </button>

        </div>

      </div>

    </div>
  );
}

export default ContinueStudying;