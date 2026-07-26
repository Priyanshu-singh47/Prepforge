import { useEffect, useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import api from "../services/api";

import TopicList from "../components/Topics/TopicList";
import TopicSearch from "../components/Topics/TopicSearch";

function Topics() {
  const { subjectId } = useParams();

  const [subject, setSubject] = useState(null);
  const [topics, setTopics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const { data } = await api.get(
          `/subjects/${subjectId}/topics`
        );

        setSubject(data.subject);
        setTopics(data.topics);
      } catch (error) {
        console.error("Failed to fetch topics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, [subjectId]);

  const filteredTopics = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return topics
      .filter((topic) => {
        if (!query) return true;

        return topic.name.toLowerCase().includes(query);
      })
      .sort((a, b) => {
        if (b.progress !== a.progress) {
          return b.progress - a.progress;
        }

        return b.solved - a.solved;
      });
  }, [topics, searchTerm]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg font-medium text-gray-500">
          Loading topics...
        </p>
      </div>
    );
  }

  if (!subject) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">
          Subject not found
        </h2>

        <Link
          to="/subjects"
          className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Back to Subjects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back */}

      <Link
        to="/subjects"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
      >
        <ArrowLeft size={18} />
        Back to Subjects
      </Link>

      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {subject.shortName}
          </h1>

          <p className="mt-2 text-gray-500">
            {filteredTopics.length} Topics
          </p>
        </div>

        <TopicSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      {/* Topics */}

      <TopicList topics={filteredTopics} />
    </div>
  );
}

export default Topics;