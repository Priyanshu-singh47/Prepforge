import { useState } from "react";

import { notesData } from "../mock/notesData";

import NotesToolbar from "../components/Notes/NotesToolbar";
import NoteCard from "../components/Notes/NoteCard";
import NoteEditorModal from "../components/Notes/NoteEditorModal";
import EmptyState from "../components/Notes/EmptyState";

function Notes() {
  const [openModal, setOpenModal] = useState(false);

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
        onAddNote={() => setOpenModal(true)}
      />

      {/* Notes */}

      {notesData.length === 0 ? (
        <EmptyState
          onAddNote={() => setOpenModal(true)}
        />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {notesData.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
            />
          ))}
        </div>
      )}

      {/* Modal */}

      <NoteEditorModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
}

export default Notes;