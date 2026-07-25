import { useMemo, useState } from "react";

import BookmarkToolbar from "../components/Bookmarks/BookmarkToolbar";
import BookmarkCard from "../components/Bookmarks/BookmarkCard";
import EmptyState from "../components/Bookmarks/EmptyState";

import { bookmarksData } from "../mock/bookmarksData";

function Bookmarks() {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("Subjects");
  const [difficulty, setDifficulty] = useState("Difficulty");

  const filteredBookmarks = useMemo(() => {
    return bookmarksData.filter((bookmark) => {
      const matchesSearch =
        bookmark.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        bookmark.topic
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesSubject =
        subject === "Subjects" ||
        bookmark.subject === subject;

      const matchesDifficulty =
        difficulty === "Difficulty" ||
        bookmark.difficulty === difficulty;

      return (
        matchesSearch &&
        matchesSubject &&
        matchesDifficulty
      );
    });
  }, [search, subject, difficulty]);

  return (
    <div className="space-y-5">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Bookmarks
        </h1>

        <p className="mt-1 text-gray-500">
          Revisit your saved questions.
        </p>
      </div>

      <BookmarkToolbar
        search={search}
        setSearch={setSearch}
        subject={subject}
        setSubject={setSubject}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      {filteredBookmarks.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredBookmarks.map((bookmark) => (
            <BookmarkCard
              key={bookmark.id}
              bookmark={bookmark}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookmarks;