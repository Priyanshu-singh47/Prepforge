import { Search, X } from "lucide-react";

function SubjectSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-[440px]">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search subjects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-11 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default SubjectSearch;