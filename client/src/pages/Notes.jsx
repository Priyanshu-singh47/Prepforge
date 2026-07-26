import { useEffect, useState } from "react";
import api from "../services/api";

import NotesToolbar from "../components/Notes/NotesToolbar";
import NoteCard from "../components/Notes/NoteCard";
import NoteEditorModal from "../components/Notes/NoteEditorModal";
import EmptyState from "../components/Notes/EmptyState";
import ConfirmModal from "../components/Common/ConfirmModal";

function Notes() {
  const [notes, setNotes] = useState([]);

  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("");

  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, [search, subject]);

  const fetchNotes = async () => {
    try {
      setLoading(true);

      const res = await api.get("/notes", {
        params: {
          search,
          subject,
        },
      });

      setNotes(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNote = () => {
    setEditingNote(null);
    setOpenModal(true);
  };

  const handleEdit = (note) => {
    setEditingNote(note);
    setOpenModal(true);
  };

  const handleDeleteClick = (id) => {
    setSelectedNoteId(id);
    setConfirmOpen(true);
  };

  const handleDelete = async () => {
    try {
      setDeleteLoading(true);

      await api.delete(`/notes/${selectedNoteId}`);

      setConfirmOpen(false);
      setSelectedNoteId(null);

      fetchNotes();
    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
          "Failed to delete note."
      );
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Notes
        </h1>

        <p className="mt-1 text-gray-500">
          Organize your study notes and important concepts.
        </p>
      </div>

      {/* Toolbar */}

      <NotesToolbar
        search={search}
        setSearch={setSearch}
        subject={subject}
        setSubject={setSubject}
        onNewNote={handleAddNote}
      />

      {/* Notes */}

      {loading ? (
        <div className="py-12 text-center text-gray-500">
          Loading...
        </div>
      ) : notes.length === 0 ? (
        search.trim() || subject ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4 h-14 w-14 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.35-5.15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              />
            </svg>

            <h3 className="text-xl font-semibold text-gray-800">
              No Notes Found
            </h3>

            <p className="mt-2 text-gray-500">
              We couldn't find any notes matching your search or selected
              subject.
            </p>
          </div>
        ) : (
          <EmptyState onAddNote={handleAddNote} />
        )
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}

      <NoteEditorModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditingNote(null);
        }}
        editingNote={editingNote}
        onSave={fetchNotes}
      />

      {/* Delete Confirmation */}

      <ConfirmModal
        open={confirmOpen}
        title="Delete Note"
        message="Are you sure you want to delete this note? This action cannot be undone."
        confirmText="Delete"
        loading={deleteLoading}
        onCancel={() => {
          setConfirmOpen(false);
          setSelectedNoteId(null);
        }}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default Notes;