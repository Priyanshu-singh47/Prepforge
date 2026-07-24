import { ExternalLink, CheckCircle2, Circle } from "lucide-react";

function QuestionActions({ question }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-gray-900">
        Actions
      </h2>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
            question.solved
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {question.solved ? (
            <>
              <CheckCircle2 size={18} />
              Solved
            </>
          ) : (
            <>
              <Circle size={18} />
              Mark as Solved
            </>
          )}
        </button>

        <a
          href={question.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          <ExternalLink size={18} />
          Open on LeetCode
        </a>
      </div>
    </div>
  );
}

export default QuestionActions;