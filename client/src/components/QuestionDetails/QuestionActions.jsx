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
      await api.patch(`/progress/${question._id}`, {
        status: newStatus,
      });

      setStatus(newStatus);
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">

      <h2 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
        Actions
      </h2>

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">

        <button
          onClick={() => updateStatus("Done")}
          className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
            status === "Done"
              ? "bg-green-600 text-white"
              : "border border-green-600 bg-white text-green-600 hover:bg-green-50 dark:bg-gray-800 dark:hover:bg-green-900/20"
          }`}
        >
          <CheckCircle2 size={18}/>
          Done
        </button>


        <button
          onClick={() => updateStatus("Review Later")}
          className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
            status === "Review Later"
              ? "bg-yellow-500 text-white"
              : "border border-yellow-500 bg-white text-yellow-600 hover:bg-yellow-50 dark:bg-gray-800 dark:hover:bg-yellow-900/20"
          }`}
        >
          <Clock3 size={18}/>
          Review Later
        </button>


        <button
          onClick={() => updateStatus("Not Started")}
          className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
            status === "Not Started"
              ? "bg-gray-700 text-white"
              : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          <Circle size={18}/>
          Not Started
        </button>


        {question.practice?.url && (
          <a
            href={question.practice.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <ExternalLink size={18}/>
            {question.practice.name}
          </a>
        )}

      </div>
    </div>
  );
}

export default QuestionActions;