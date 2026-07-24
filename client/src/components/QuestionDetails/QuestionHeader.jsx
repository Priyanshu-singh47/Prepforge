import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function QuestionHeader({ question }) {
  const { subjectId, topicId } = useParams();

  const badgeColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div>
      <Link
        to={`/subjects/${subjectId}/topics/${topicId}`}
        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
      >
        <ArrowLeft size={16} />
        Back to Questions
      </Link>

      <div className="mt-4 flex items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">
          {question.title}
        </h1>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${badgeColor[question.difficulty]}`}
        >
          {question.difficulty}
        </span>
      </div>
    </div>
  );
}

export default QuestionHeader;