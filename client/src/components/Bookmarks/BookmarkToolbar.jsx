import { Search } from "lucide-react";

function BookmarkToolbar({
  search,
  setSearch,
  subject,
  setSubject,
  difficulty,
  setDifficulty,
}) {
  return (
    <div className="inline-flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      {/* Search */}

      <div className="relative sm:w-80">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search bookmarks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-3 text-sm outline-none transition-colors duration-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Subject */}

      <select
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition-colors duration-200 hover:border-gray-300 hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option>Subjects</option>
        <option>DSA</option>
        <option>DBMS</option>
        <option>OOPS</option>
        <option>OS</option>
        <option>CN</option>
        <option>Aptitude</option>
        <option>System Design</option>
      </select>

      {/* Difficulty */}

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition-colors duration-200 hover:border-gray-300 hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option>Difficulty</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
    </div>
  );
}

export default BookmarkToolbar;