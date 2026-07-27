import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../services/api";

import QuestionHeader from "../components/QuestionDetails/QuestionHeader";
import QuestionTabs from "../components/QuestionDetails/QuestionTabs";
import QuestionActions from "../components/QuestionDetails/QuestionActions";

function QuestionDetails() {
  const { subjectId, topicId, questionId } = useParams();

  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const { data } = await api.get(`/questions/${questionId}`);
        setQuestion(data);
      } catch (error) {
        console.error("Failed to fetch question:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [questionId]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
          Loading question...
        </p>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-sm dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
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