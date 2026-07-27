import { useEffect, useState } from "react";
import api from "../../services/api";

function QuestionTabs({ question }) {
  const [activeTab, setActiveTab] = useState("Resources");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const tabs = ["Resources", "Notes"];

  useEffect(() => {
    if (activeTab !== "Notes" || !question?._id) return;

    const fetchNote = async () => {
      try {
        setLoading(true);

        const { data } = await api.get(
          `/notes/question/${question._id}`
        );

        setNote(data?.content || "");
      } catch {
        setNote("");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [activeTab, question]);


  const saveNote = async () => {
    try {
      setSaving(true);
      setMessage("");

      await api.post(`/notes/question/${question._id}`, {
        content: note,
      });

      setMessage("Note saved successfully.");
    } catch {
      setMessage("Failed to save note.");
    } finally {
      setSaving(false);

      setTimeout(() => {
        setMessage("");
      },2000);
    }
  };


  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">

      <div className="flex border-b border-gray-200 dark:border-gray-700">

        {tabs.map((tab)=>(
          <button
            key={tab}
            onClick={()=>setActiveTab(tab)}
            className={`px-6 py-4 text-sm font-medium transition ${
              activeTab===tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>


      <div className="p-6">

        {activeTab==="Resources" && (
          <div className="space-y-6">

            {question.pattern && (
              <section>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Pattern
                </h2>

                <p className="text-gray-600 dark:text-gray-400">
                  {question.pattern}
                </p>
              </section>
            )}


            {question.source?.url && (
              <section>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
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
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
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
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
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


        {activeTab==="Notes" && (
          <div className="space-y-4">

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Personal Notes
            </h2>


            {loading ? (
              <p className="text-gray-500">
                Loading...
              </p>
            ) : (
              <>
                <textarea
                  value={note}
                  onChange={(e)=>setNote(e.target.value)}
                  rows={10}
                  placeholder="Write your personal notes here..."
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />

                <div className="flex items-center justify-between">

                  {message ? (
                    <p className="text-sm text-green-600">
                      {message}
                    </p>
                  ) : (
                    <div/>
                  )}

                  <button
                    onClick={saveNote}
                    disabled={saving}
                    className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                  >
                    {saving ? "Saving..." : "Save Notes"}
                  </button>

                </div>
              </>
            )}

          </div>
        )}

      </div>

    </div>
  );
}

export default QuestionTabs;