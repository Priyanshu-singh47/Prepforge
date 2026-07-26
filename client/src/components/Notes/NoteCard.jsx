import { Pencil, Trash2, Pin } from "lucide-react";

function NoteCard({
  note,
  onEdit,
  onDelete,
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Header */}

      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {note.title}
            </h3>

            {note.isPinned && (
              <Pin
                size={16}
                className="fill-yellow-400 text-yellow-500"
              />
            )}
          </div>

          <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {note.subject?.name}
          </span>
        </div>
      </div>

      {/* Content */}

      <p className="mb-5 line-clamp-4 text-sm leading-6 text-gray-600">
        {note.content}
      </p>

      {/* Footer */}

      <div className="flex items-center justify-between border-t pt-4">
        <span className="text-xs text-gray-500">
          Updated{" "}
          {new Date(note.updatedAt).toLocaleDateString()}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(note)}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100"
          >
            <Pencil size={17} />
          </button>

          <button
            onClick={() => onDelete(note._id)}
            className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50"
          >
            <Trash2 size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;