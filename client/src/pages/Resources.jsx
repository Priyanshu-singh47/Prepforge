import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  Code2,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

import api from "../services/api";

function Resources() {
  const { subjectId } = useParams();

  const [subject, setSubject] = useState(null);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data } = await api.get(
          `/subjects/${subjectId}/topics`
        );

        setSubject(data.subject);

        const resourceRes = await api.get(
          `/resources/${data.subject.shortName}`
        );

        setResources(resourceRes.data);
      } catch (error) {
        console.error("Failed to fetch resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [subjectId]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg font-medium text-gray-500">
          Loading resources...
        </p>
      </div>
    );
  }

  const groupedResources = {
    Learning: resources.filter((r) => r.type === "Learning"),
    Notes: resources.filter((r) => r.type === "Notes"),
    Interview: resources.filter((r) => r.type === "Interview"),
    Practice: resources.filter((r) => r.type === "Practice"),
  };

  const sections = [
    {
      key: "Learning",
      title: "Learning Resources",
      icon: GraduationCap,
    },
    {
      key: "Notes",
      title: "Notes",
      icon: BookOpen,
    },
    {
      key: "Interview",
      title: "Interview Preparation",
      icon: Briefcase,
    },
    {
      key: "Practice",
      title: "Practice",
      icon: Code2,
    },
  ];

  return (
    <div className="space-y-8">
      <Link
        to={`/subjects/${subjectId}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600"
      >
        <ArrowLeft size={18} />
        Back to Topics
      </Link>

      <div>
        <h1 className="text-4xl font-bold">
          {subject?.shortName} Resource Hub
        </h1>

        <p className="mt-2 text-gray-500">
          Curated resources to master {subject?.shortName}.
        </p>
      </div>

      {sections.map((section) => {
        const data = groupedResources[section.key];

        if (data.length === 0) return null;

        const Icon = section.icon;

        return (
          <div key={section.key}>
            <div className="mb-5 flex items-center gap-3">
              <Icon
                size={24}
                className="text-blue-600"
              />

              <h2 className="text-2xl font-bold">
                {section.title}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {data.map((resource) => (
                <div
                  key={resource._id}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold">
                    {resource.title}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    {resource.platform}
                  </p>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Open Resource
                    <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {resources.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
          <BookOpen
            size={48}
            className="mx-auto text-gray-400"
          />

          <h2 className="mt-4 text-xl font-semibold">
            No Resources Available
          </h2>

          <p className="mt-2 text-gray-500">
            Resources for this subject will appear here.
          </p>
        </div>
      )}
    </div>
  );
}
export default Resources;