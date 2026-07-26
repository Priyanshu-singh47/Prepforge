import QuestionCard from "./QuestionCard";

function QuestionList({
  questions,
  toggleBookmark,
}) {
  if (questions.length === 0) {
    return (
      <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700">
            No questions found
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Try searching with a different keyword.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {questions.map((question) => (
        <QuestionCard
          key={question._id}
          question={question}
          toggleBookmark={toggleBookmark}
        />
      ))}
    </div>
  );
}

export default QuestionList;