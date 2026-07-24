import { X } from "lucide-react";

function NoteEditorModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Add Note
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-1 hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter note title"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500"
          />

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500">
            <option>Select Subject</option>
            <option>DSA</option>
            <option>DBMS</option>
            <option>OOP</option>
            <option>OS</option>
            <option>CN</option>
            <option>System Design</option>
            <option>Aptitude</option>
          </select>

          <textarea
            rows={10}
            placeholder="Write your notes here..."
            className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500"
          />

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-2.5 font-medium transition-colors hover:bg-gray-100"
            >
              Cancel
            </button>

            <button className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700">
              Save Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteEditorModal;