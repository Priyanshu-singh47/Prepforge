import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { topicsData } from "../mock/topicsData";
import { questionsData } from "../mock/questionsData";

import QuestionList from "../components/Questions/QuestionList";
import QuestionSearch from "../components/Questions/QuestionSearch";
import QuestionFilter from "../components/Questions/QuestionFilter";

function Questions() {
  const { subjectId, topicId } = useParams();

  const topic = topicsData[subjectId]?.find(
    (item) => item.id === topicId
  );

  const questions = questionsData[subjectId]?.[topicId] || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredQuestions = useMemo(() => {
    let filtered = questions.filter((question) =>
      question.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    if (filter === "Solved") {
      filtered = filtered.filter((question) => question.solved);
    }

    if (filter === "Unsolved") {
      filtered = filtered.filter((question) => !question.solved);
    }

    return filtered;
  }, [questions, searchTerm, filter]);

  if (!topic) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">
          Topic not found
        </h2>

        <Link
          to={`/subjects/${subjectId}`}
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Back to Topics
        </Link>
      </div>
    );
  }

  const solved = questions.filter((q) => q.solved).length;

  const progress =
    questions.length === 0
      ? 0
      : Math.round((solved / questions.length) * 100);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link
            to={`/subjects/${subjectId}`}
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back to Topics
          </Link>

          <h1 className="mt-3 text-3xl font-bold text-gray-900">
            {topic.name}
          </h1>

          <p className="mt-2 text-gray-500">
            {questions.length} Questions • {solved} Solved • {progress}% Completed
          </p>
        </div>

        <QuestionSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <QuestionFilter
        filter={filter}
        setFilter={setFilter}
        questions={questions}
      />

      <QuestionList questions={filteredQuestions} />
    </div>
  );
}

export default Questions;