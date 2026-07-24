import SubjectCard from "./SubjectCard";

function SubjectGrid({ subjects }) {
  if (subjects.length === 0) {
    return (
      <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700">
            No subjects found
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Try searching with a different keyword.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.id}
          subject={subject}
        />
      ))}
    </div>
  );
}

export default SubjectGrid;