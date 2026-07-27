function QuestionContent({ question }) {
  return (
    <div className="space-y-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">

      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
          Pattern
        </h2>

        <p className="leading-7 text-gray-600 dark:text-gray-400">
          {question.pattern || "No pattern available."}
        </p>
      </section>


      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
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


      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
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