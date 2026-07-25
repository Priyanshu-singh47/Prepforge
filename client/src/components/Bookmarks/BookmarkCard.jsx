function BookmarkCard({ bookmark }) {
  const difficultyColors = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {bookmark.title}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {bookmark.subject} • {bookmark.topic}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyColors[bookmark.difficulty]}`}
        >
          {bookmark.difficulty}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {bookmark.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-gray-400">
          Saved {bookmark.savedAt}
        </span>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 active:scale-95">
          Solve
        </button>
      </div>
    </div>
  );
}

export default BookmarkCard;