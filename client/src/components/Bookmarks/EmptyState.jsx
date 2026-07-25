import { BookmarkX } from "lucide-react";

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
      <BookmarkX
        size={52}
        className="mx-auto text-gray-400"
      />

      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        No bookmarks found
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Save important questions to revisit them later.
      </p>
    </div>
  );
}

export default EmptyState;