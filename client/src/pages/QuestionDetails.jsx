import { Link, useParams } from "react-router-dom";

import { questionDetailsData } from "../mock/questionDetailsData";

import QuestionHeader from "../components/QuestionDetails/QuestionHeader";
import QuestionTabs from "../components/QuestionDetails/QuestionTabs";
import QuestionActions from "../components/QuestionDetails/QuestionActions";

function QuestionDetails() {
  const { subjectId, topicId, questionId } = useParams();

  const question =
    questionDetailsData[subjectId]?.[topicId]?.[questionId];

  if (!question) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">
          Question not found
        </h2>

        <Link
          to={`/subjects/${subjectId}/topics/${topicId}`}
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Back to Questions
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <QuestionHeader question={question} />

      <QuestionTabs question={question} />

      <QuestionActions question={question} />
    </div>
  );
}

export default QuestionDetails;