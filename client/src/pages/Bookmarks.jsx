import { useEffect, useMemo, useState } from "react";

import api from "../services/api";

import BookmarkToolbar from "../components/Bookmarks/BookmarkToolbar";
import BookmarkCard from "../components/Bookmarks/BookmarkCard";
import EmptyState from "../components/Bookmarks/EmptyState";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      const res = await api.get("/bookmarks");
      setBookmarks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const subjects = useMemo(() => {
    const uniqueSubjects = [];

    bookmarks.forEach((bookmark) => {
      const sub = bookmark.question?.topic?.subject;

      if (
        sub &&
        !uniqueSubjects.find((item) => item._id === sub._id)
      ) {
        uniqueSubjects.push(sub);
      }
    });

    return uniqueSubjects;
  }, [bookmarks]);

  const filteredBookmarks = useMemo(() => {
    return bookmarks.filter((bookmark) => {
      const question = bookmark.question;

      if (!question) return false;

      const matchesSearch =
        question.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        question.topic.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesSubject =
        !subject ||
        question.topic.subject?._id === subject;

      const matchesDifficulty =
        !difficulty ||
        question.difficulty === difficulty;

      return (
        matchesSearch &&
        matchesSubject &&
        matchesDifficulty
      );
    });
  }, [bookmarks, search, subject, difficulty]);

  if (loading) {
    return (
      <div className="flex h-72 items-center justify-center">
        <p className="text-lg font-medium text-gray-500">
          Loading bookmarks...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
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
        subjects={subjects}
      />

      {filteredBookmarks.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredBookmarks.map((bookmark) => (
            <BookmarkCard
              key={bookmark._id}
              bookmark={bookmark}
              onRefresh={fetchBookmarks}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookmarks;