import { useEffect, useState } from "react";
import { Search, Plus } from "lucide-react";

import api from "../../services/api";

function NotesToolbar({
  search,
  setSearch,
  subject,
  setSubject,
  onNewNote,
}) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const res = await api.get("/subjects");
      setSubjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

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
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-3 text-sm outline-none transition-colors hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Subject Filter */}

      <select
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-44 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 outline-none transition-colors hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option value="">Subjects</option>

        {subjects.map((sub) => (
          <option key={sub._id} value={sub._id}>
            {sub.name}
          </option>
        ))}
      </select>

      {/* New Note Button */}

      <button
        onClick={onNewNote}
        className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:scale-95"
      >
        <Plus size={18} />
        New
      </button>
    </div>
  );
}

export default NotesToolbar;