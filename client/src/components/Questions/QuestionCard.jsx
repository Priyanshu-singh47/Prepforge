import {
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

function QuestionCard({ question, toggleBookmark }) {
  const { subjectId, topicId } = useParams();

  const badgeColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <Link
      to={`/subjects/${subjectId}/topics/${topicId}/questions/${question._id}`}
      className="group relative flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-3 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleBookmark(question._id);
        }}
        className="absolute right-4 top-4 rounded-full p-1 transition hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <Bookmark
          size={18}
          className={
            question.isBookmarked
              ? "fill-blue-600 text-blue-600"
              : "text-gray-400 hover:text-blue-600"
          }
        />
      </button>

      <div className="flex items-center gap-4">

        {question.status === "Done" ? (
          <CheckCircle2
            size={22}
            className="text-green-600"
          />
        ) : (
          <Circle
            size={22}
            className="text-gray-400"
          />
        )}

        <h3 className="font-medium text-gray-900 dark:text-white">
          {question.title}
        </h3>

      </div>


      <div className="flex items-center gap-4 pr-8">

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            badgeColor[question.difficulty] ||
            "bg-gray-100 text-gray-700"
          }`}
        >
          {question.difficulty}
        </span>


        <ArrowRight
          size={18}
          className="text-gray-400 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
        />

      </div>

    </Link>
  );
}

export default QuestionCard;