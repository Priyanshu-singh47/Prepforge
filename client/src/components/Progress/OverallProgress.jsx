import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Target,
} from "lucide-react";

function OverallProgress({ overall }) {
  const todayProgress = Math.min(
    (overall.todayStudyHours / overall.dailyGoal) * 100,
    100
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-lg">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Overall Progress
      </h2>

      <div className="space-y-3">
        {/* Solved Questions */}

        <div className="group flex items-center justify-between rounded-lg px-2 py-2 transition-all duration-200 hover:bg-green-50">
          <div className="flex items-center gap-2">
            <CheckCircle2
              size={16}
              className="text-green-600 transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-sm text-gray-700 transition-colors duration-200 group-hover:text-green-700">
              Solved Questions
            </span>
          </div>

          <span className="text-sm font-semibold">
            {overall.solvedQuestions}
          </span>
        </div>

        {/* Total Questions */}

        <div className="group flex items-center justify-between rounded-lg px-2 py-2 transition-all duration-200 hover:bg-blue-50">
          <div className="flex items-center gap-2">
            <BookOpen
              size={16}
              className="text-blue-600 transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-sm text-gray-700 transition-colors duration-200 group-hover:text-blue-700">
              Total Questions
            </span>
          </div>

          <span className="text-sm font-semibold">
            {overall.totalQuestions}
          </span>
        </div>

        {/* Completion */}

        <div className="group flex items-center justify-between rounded-lg px-2 py-2 transition-all duration-200 hover:bg-purple-50">
          <div className="flex items-center gap-2">
            <Target
              size={16}
              className="text-purple-600 transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-sm text-gray-700 transition-colors duration-200 group-hover:text-purple-700">
              Completion
            </span>
          </div>

          <span className="text-sm font-semibold">
            {overall.completion}%
          </span>
        </div>

        {/* Overall Completion Bar */}

        <div className="space-y-1">
          <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${overall.completion}%`,
              }}
            />
          </div>
        </div>

        {/* Total Study Hours */}

        <div className="group flex items-center justify-between rounded-lg px-2 py-2 transition-all duration-200 hover:bg-orange-50">
          <div className="flex items-center gap-2">
            <Clock3
              size={16}
              className="text-orange-600 transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-sm text-gray-700 transition-colors duration-200 group-hover:text-orange-700">
              Total Study Hours
            </span>
          </div>

          <span className="text-sm font-semibold">
            {overall.totalStudyHours} hrs
          </span>
        </div>

        {/* Today's Study */}

        <div className="border-t pt-3">
          <div className="group mb-2 flex items-center justify-between rounded-lg px-2 py-2 transition-all duration-200 hover:bg-blue-50">
            <span className="text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-blue-700">
              Today's Study
            </span>

            <span className="text-sm font-semibold text-blue-600">
              {overall.todayStudyHours} hrs
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${todayProgress}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverallProgress;