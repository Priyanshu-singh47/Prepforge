import {
  ArrowRight,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

function QuestionCard({ question }) {
  const { subjectId, topicId } = useParams();

  const badgeColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <Link
      to={`/subjects/${subjectId}/topics/${topicId}/questions/${question.id}`}
      className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-3 transition-colors duration-200 hover:bg-gray-50"
    >
      <div className="flex items-center gap-4">
        {question.solved ? (
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

        <h3 className="font-medium text-gray-900">
          {question.title}
        </h3>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor[question.difficulty]}`}
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