import { FileText } from "lucide-react";

function EmptyState({ onAddNote }) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">

      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <FileText
          size={32}
          className="text-blue-600"
        />
      </div>


      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        No Notes Yet
      </h2>


      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Create your first study note to keep important concepts in one place.
      </p>


      <button
        onClick={onAddNote}
        className="mt-6 rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
      >
        New Note
      </button>


    </div>
  );
}

export default EmptyState;