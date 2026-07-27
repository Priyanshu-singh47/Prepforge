import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

import api from "../services/api";

import TopicList from "../components/Topics/TopicList";
import TopicSearch from "../components/Topics/TopicSearch";

function Topics() {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const [subject, setSubject] = useState(null);
  const [topics, setTopics] = useState([]);
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/subjects/${subjectId}/topics`);

        setSubject(data.subject);
        setTopics(data.topics);

        const resourceRes = await api.get(
          `/resources/${data.subject.shortName}`
        );

        setResources(resourceRes.data);
      } catch (error) {
        console.error("Failed to fetch topics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subjectId]);

  const filteredTopics = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return topics
      .filter((topic) =>
        topic.name.toLowerCase().includes(query)
      )
      .sort((a, b) => {
        if (b.progress !== a.progress) {
          return b.progress - a.progress;
        }

        return b.solved - a.solved;
      });
  }, [topics, searchTerm]);

  const resourceIcons = {
    Learning: "📺",
    Notes: "📖",
    Interview: "💼",
    Practice: "💻",
  };

  const resourceCounts = resources.reduce((acc, resource) => {
    acc[resource.type] = (acc[resource.type] || 0) + 1;
    return acc;
  }, {});


  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
          Loading...
        </p>
      </div>
    );
  }


  if (!subject) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow-sm dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
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

      <Link
        to="/subjects"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600"
      >
        <ArrowLeft size={18} />
        Back to Subjects
      </Link>


      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {subject.shortName}
          </h1>

          <p className="mt-2 text-gray-500">
            {topics.length} Topics
          </p>

        </div>


        <TopicSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

      </div>



      <button
        onClick={() =>
          navigate(`/subjects/${subjectId}/resources`)
        }
        className="group w-full rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-blue-900 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900"
      >

        <div className="flex items-center justify-between">

          <div className="flex items-start gap-4">

            <div className="rounded-2xl bg-blue-600 p-4 text-white shadow-md">
              <BookOpen size={30}/>
            </div>


            <div>

              <div className="mb-2 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                ⭐ PrepForge Resource Hub
              </div>


              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Master {subject.shortName} with Curated Resources
              </h2>


              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {resources.length} curated resources for{" "}
                {subject.shortName}.
              </p>


              <div className="mt-4 flex flex-wrap gap-2">

                {Object.entries(resourceCounts).map(
                  ([type, count]) => (

                    <span
                      key={type}
                      className="rounded-full bg-white px-3 py-1 text-sm font-medium shadow-sm dark:bg-gray-700 dark:text-gray-200"
                    >
                      {resourceIcons[type]} {type} ({count})
                    </span>

                  )
                )}

              </div>

            </div>

          </div>


          <ArrowRight
            size={28}
            className="text-blue-600 transition-transform duration-300 group-hover:translate-x-2"
          />

        </div>

      </button>


      <TopicList topics={filteredTopics}/>

    </div>
  );
}

export default Topics;