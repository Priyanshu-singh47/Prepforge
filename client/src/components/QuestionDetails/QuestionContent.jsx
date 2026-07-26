function QuestionContent({ question }) {
  return (
    <div className="space-y-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Pattern */}

      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Pattern
        </h2>

        <p className="leading-7 text-gray-600">
          {question.pattern || "No pattern available."}
        </p>
      </section>

      {/* Article */}

      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Article
        </h2>

        {question.article ? (
          <a
            href={question.article.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            {question.article.name}
          </a>
        ) : (
          <p className="text-gray-500">
            No article available.
          </p>
        )}
      </section>

      {/* Practice */}

      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Practice
        </h2>

        {question.practice ? (
          <a
            href={question.practice.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            {question.practice.name}
          </a>
        ) : (
          <p className="text-gray-500">
            No practice link available.
          </p>
        )}
      </section>

    </div>
  );
}

export default QuestionContent;