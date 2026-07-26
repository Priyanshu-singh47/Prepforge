import { useState } from "react";

function QuestionTabs({ question }) {
  const [activeTab, setActiveTab] = useState("Resources");

  const tabs = ["Resources", "Notes"];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6">
        {activeTab === "Resources" && (
          <div className="space-y-6">
            {question.pattern && (
              <section>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  Pattern
                </h2>

                <p className="text-gray-600">{question.pattern}</p>
              </section>
            )}

            {question.source?.url && (
              <section>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  Source
                </h2>

                <a
                  href={question.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {question.source.name}
                </a>
              </section>
            )}

            {question.article?.url && (
              <section>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  Article
                </h2>

                <a
                  href={question.article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {question.article.name}
                </a>
              </section>
            )}

            {question.practice?.url && (
              <section>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  Practice
                </h2>

                <a
                  href={question.practice.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {question.practice.name}
                </a>
              </section>
            )}

            {!question.source?.url &&
              !question.article?.url &&
              !question.practice?.url &&
              !question.pattern && (
                <p className="text-gray-500">
                  No resources available.
                </p>
              )}
          </div>
        )}

        {activeTab === "Notes" && (
          <div>
            <h2 className="mb-3 text-lg font-semibold text-gray-900">
              Personal Notes
            </h2>

            <div className="min-h-40 rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-700">
              {question.notes?.trim()
                ? question.notes
                : "No notes added yet."}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionTabs;