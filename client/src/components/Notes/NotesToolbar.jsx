import { Plus, Search } from "lucide-react";

function NotesToolbar({ onAddNote }) {
  return (
    <div className="inline-flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      {/* Search */}

      <div className="relative w-full sm:w-80">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search notes..."
          className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm outline-none transition-all duration-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Subject Filter */}

      <select className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
        <option>All</option>
        <option>DSA</option>
        <option>DBMS</option>
        <option>OOP</option>
        <option>OS</option>
        <option>CN</option>
        <option>System Design</option>
        <option>Aptitude</option>
      </select>

      {/* New Button */}

      <button
        onClick={onAddNote}
        className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:scale-95"
      >
        <Plus size={16} />
        New
      </button>
    </div>
  );
}

export default NotesToolbar;