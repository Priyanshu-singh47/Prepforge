import { useState } from "react";
import {
  ExternalLink,
  CheckCircle2,
  Circle,
  Clock3,
} from "lucide-react";

import api from "../../services/api";

function QuestionActions({ question }) {
  const [status, setStatus] = useState(
    question.status || "Not Started"
  );

  const updateStatus = async (newStatus) => {
    try {
      await api.patch(
        `/progress/${question._id}`,
        {
          status: newStatus,
        }
      );

      setStatus(newStatus);
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-gray-900">
        Actions
      </h2>

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {/* Done */}

        <button
          onClick={() => updateStatus("Done")}
          className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
            status === "Done"
              ? "bg-green-600 text-white"
              : "border border-green-600 bg-white text-green-600 hover:bg-green-50"
          }`}
        >
          <CheckCircle2 size={18} />
          Done
        </button>

        {/* Review Later */}

        <button
          onClick={() => updateStatus("Review Later")}
          className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
            status === "Review Later"
              ? "bg-yellow-500 text-white"
              : "border border-yellow-500 bg-white text-yellow-600 hover:bg-yellow-50"
          }`}
        >
          <Clock3 size={18} />
          Review Later
        </button>

        {/* Reset */}

        <button
          onClick={() => updateStatus("Not Started")}
          className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
            status === "Not Started"
              ? "bg-gray-700 text-white"
              : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Circle size={18} />
          Not Started
        </button>

        {/* Practice */}

        {question.practice?.url && (
          <a
            href={question.practice.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            <ExternalLink size={18} />
            {question.practice.name}
          </a>
        )}
      </div>
    </div>
  );
}

export default QuestionActions;