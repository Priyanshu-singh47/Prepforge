import { useEffect, useState } from "react";
import { X } from "lucide-react";

import api from "../../services/api";

function NoteEditorModal({
  open,
  onClose,
  onSave,
  editingNote = null,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    fetchSubjects();
    setError("");
  }, [open]);

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setSubject(editingNote.subject?._id || "");
    } else {
      setTitle("");
      setContent("");
      setSubject("");
    }

    setError("");
  }, [editingNote, open]);

  const fetchSubjects = async () => {
    try {
      const res = await api.get("/subjects");
      setSubjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    if (!title.trim()) {
      setError("Note title is required.");
      return;
    }

    if (!subject) {
      setError("Please select a subject.");
      return;
    }

    if (!content.trim()) {
      setError("Content is required.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        title,
        content,
        subject,
      };

      if (editingNote) {
        await api.put(
          `/notes/${editingNote._id}`,
          payload
        );
      } else {
        await api.post("/notes", payload);
      }

      setError("");

      onSave();
      onClose();
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            {editingNote ? "Edit Note" : "Add Note"}
          </h2>

          <button
            onClick={() => {
              setError("");
              onClose();
            }}
            className="rounded-lg p-1 hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <input
            type="text"
            placeholder="Enter note title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <select
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setError("");
            }}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="">Select Subject</option>

            {subjects.map((sub) => (
              <option
                key={sub._id}
                value={sub._id}
              >
                {sub.shortName || sub.name}
              </option>
            ))}
          </select>

          <textarea
            rows={10}
            placeholder="Write your notes here..."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setError("");
            }}
            className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => {
                setError("");

                if (!editingNote) {
                  setTitle("");
                  setContent("");
                  setSubject("");
                }

                onClose();
              }}
              disabled={loading}
              className="rounded-xl border border-gray-300 px-5 py-2.5 font-medium hover:bg-gray-100 disabled:opacity-60"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {loading
                ? "Saving..."
                : editingNote
                ? "Update Note"
                : "Save Note"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteEditorModal;