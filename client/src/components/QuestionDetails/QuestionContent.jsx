function QuestionContent({ question }) {
  return (
    <div className="space-y-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Description */}

      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Description
        </h2>

        <p className="leading-7 text-gray-600">
          {question.description}
        </p>
      </section>

      {/* Topics */}

      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Topics
        </h2>

        <div className="flex flex-wrap gap-2">
          {question.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* Companies */}

      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Companies
        </h2>

        <div className="flex flex-wrap gap-2">
          {question.companies.map((company) => (
            <span
              key={company}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
            >
              {company}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default QuestionContent;