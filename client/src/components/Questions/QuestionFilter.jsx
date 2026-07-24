function QuestionFilter({
  filter,
  setFilter,
  questions,
}) {
  const total = questions.length;

  const solved = questions.filter(
    (q) => q.solved
  ).length;

  const unsolved = total - solved;

  const filters = [
    {
      label: "All",
      count: total,
    },
    {
      label: "Solved",
      count: solved,
    },
    {
      label: "Unsolved",
      count: unsolved,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {filters.map((item) => (
        <button
          key={item.label}
          onClick={() => setFilter(item.label)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            filter === item.label
              ? "bg-blue-600 text-white"
              : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          {item.label} ({item.count})
        </button>
      ))}
    </div>
  );
}

export default QuestionFilter;