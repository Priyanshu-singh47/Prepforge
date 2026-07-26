import { BookmarkX } from "lucide-react";

function EmptyState({
  hasFilters = false,
}) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
      <BookmarkX
        size={52}
        className="mx-auto text-gray-400"
      />

      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        {hasFilters
          ? "No Bookmarks Found"
          : "No Bookmarks Yet"}
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {hasFilters
          ? "Try changing your search or filters."
          : "Bookmark questions while practicing and they'll appear here."}
      </p>
    </div>
  );
}

export default EmptyState;