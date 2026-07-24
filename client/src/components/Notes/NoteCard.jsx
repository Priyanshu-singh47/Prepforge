import { Pencil, Trash2 } from "lucide-react";

function NoteCard({ note }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {note.title}
          </h3>

          <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {note.subject}
          </span>
        </div>
      </div>

      <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
        {note.content}
      </p>

      <div className="flex items-center justify-between border-t pt-4">
        <span className="text-xs text-gray-500">
          Updated {note.updatedAt}
        </span>

        <div className="flex gap-2">
          <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
            <Pencil size={17} />
          </button>

          <button className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50">
            <Trash2 size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;