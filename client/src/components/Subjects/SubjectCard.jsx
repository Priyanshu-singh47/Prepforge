import {
  ArrowRight,
  Code2,
  Database,
  Network,
  Boxes,
  MonitorCog,
  LayoutDashboard,
  Brain,
  BookOpen,
} from "lucide-react";

import { Link } from "react-router-dom";

const iconMap = {
  Code2,
  Database,
  Network,
  Boxes,
  MonitorCog,
  LayoutDashboard,
  Brain,
  BookOpen,
};

function SubjectCard({ subject }) {
  const Icon = iconMap[subject.icon] || BookOpen;

  return (
    <Link
      to={`/subjects/${subject._id}`}
      className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      {/* Header */}

      <div className="flex items-start">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/70 shadow-sm"
          style={{
            backgroundColor: `${subject.color}20`,
          }}
        >
          <Icon
            size={24}
            strokeWidth={2.2}
            style={{
              color: subject.color,
            }}
          />
        </div>
      </div>

      {/* Subject */}

      <div className="mt-5">
        <h2 className="text-lg font-semibold text-gray-900">
          {subject.shortName}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {subject.name}
        </p>
      </div>

      {/* Stats */}

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-400">
            Topics
          </p>

          <p className="mt-1 text-lg font-bold text-gray-900">
            {subject.topics}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">
            Solved
          </p>

          <p className="mt-1 text-lg font-bold text-gray-900">
            {subject.solved}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">
            Questions
          </p>

          <p className="mt-1 text-lg font-bold text-gray-900">
            {subject.totalQuestions}
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-xs text-gray-500">
          <span>Progress</span>

          <span className="font-semibold text-gray-700">
            {subject.progress}%
          </span>
        </div>

        <div className="h-2 rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{
              width: `${subject.progress}%`,
              backgroundColor: subject.color,
            }}
          />
        </div>
      </div>

      {/* Continue */}

      <div className="mt-6 flex justify-end">
        <span className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600 transition-colors duration-200 group-hover:bg-blue-100 group-hover:text-blue-700">
          Continue
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

export default SubjectCard;