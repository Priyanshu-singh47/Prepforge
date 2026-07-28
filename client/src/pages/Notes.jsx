import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

import NotesToolbar from "../components/Notes/NotesToolbar";
import NoteCard from "../components/Notes/NoteCard";
import NoteEditorModal from "../components/Notes/NoteEditorModal";
import EmptyState from "../components/Notes/EmptyState";
import ConfirmModal from "../components/common/ConfirmModal";

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
      toast.error("Failed to load notes");
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

      toast.success("Note deleted successfully");

      setConfirmOpen(false);
      setSelectedNoteId(null);

      fetchNotes();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete note");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Notes
        </h1>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Organize your study notes and important concepts.
        </p>
      </div>

      <NotesToolbar
        search={search}
        setSearch={setSearch}
        subject={subject}
        setSubject={setSubject}
        onNewNote={handleAddNote}
      />

      {loading ? (
        <div className="py-12 text-center text-gray-500 dark:text-gray-400">
          Loading...
        </div>
      ) : notes.length === 0 ? (
        search.trim() || subject ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              No Notes Found
            </h3>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              We couldn't find any notes matching your search.
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

      <NoteEditorModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditingNote(null);
        }}
        editingNote={editingNote}
        onSave={fetchNotes}
      />

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