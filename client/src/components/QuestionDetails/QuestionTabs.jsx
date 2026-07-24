import { useState } from "react";

function QuestionTabs({ question }) {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Notes"];

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
        {activeTab === "Description" && (
          <div className="space-y-8">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">
                Description
              </h2>

              <p className="leading-7 text-gray-600">
                {question.description}
              </p>
            </section>

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
        )}

        {activeTab === "Notes" && (
          <div className="py-10 text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Notes
            </h3>

            <p className="mt-2 text-gray-500">
              Personal notes feature coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionTabs;