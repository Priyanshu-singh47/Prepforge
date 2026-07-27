import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Target,
} from "lucide-react";

function OverallProgress({ overall }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">

      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Overall Progress
      </h2>

      <div className="space-y-3">

        <div className="group flex items-center justify-between rounded-lg px-2 py-2 transition hover:bg-green-50 dark:hover:bg-green-900/20">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-green-600"/>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Solved Questions
            </span>
          </div>
          <span className="text-sm font-semibold dark:text-white">
            {overall.done}
          </span>
        </div>


        <div className="group flex items-center justify-between rounded-lg px-2 py-2 transition hover:bg-blue-50 dark:hover:bg-blue-900/20">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-blue-600"/>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Total Questions
            </span>
          </div>
          <span className="text-sm font-semibold dark:text-white">
            {overall.totalQuestions}
          </span>
        </div>


        <div className="group flex items-center justify-between rounded-lg px-2 py-2 transition hover:bg-yellow-50 dark:hover:bg-yellow-900/20">
          <div className="flex items-center gap-2">
            <Clock3 size={16} className="text-yellow-600"/>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Review Later
            </span>
          </div>
          <span className="text-sm font-semibold dark:text-white">
            {overall.reviewLater}
          </span>
        </div>


        <div className="group flex items-center justify-between rounded-lg px-2 py-2 transition hover:bg-purple-50 dark:hover:bg-purple-900/20">
          <div className="flex items-center gap-2">
            <Target size={16} className="text-purple-600"/>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Completion
            </span>
          </div>
          <span className="text-sm font-semibold dark:text-white">
            {overall.completionPercentage}%
          </span>
        </div>


        <div className="h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
          <div
            className="h-full rounded-full bg-blue-600 transition-all"
            style={{
              width:`${overall.completionPercentage}%`,
            }}
          />
        </div>


        <div className="group flex items-center justify-between rounded-lg px-2 py-2 transition hover:bg-orange-50 dark:hover:bg-orange-900/20">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-orange-600"/>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Bookmarked
            </span>
          </div>
          <span className="text-sm font-semibold dark:text-white">
            {overall.bookmarked}
          </span>
        </div>


        <div className="group flex items-center justify-between rounded-lg px-2 py-2 transition hover:bg-red-50 dark:hover:bg-red-900/20">
          <div className="flex items-center gap-2">
            <Clock3 size={16} className="text-red-600"/>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Not Started
            </span>
          </div>
          <span className="text-sm font-semibold dark:text-white">
            {overall.notStarted}
          </span>
        </div>

      </div>

    </div>
  );
}

export default OverallProgress;