import { useMemo, useState } from "react";
import SubjectGrid from "../components/Subjects/SubjectGrid";
import SubjectSearch from "../components/Subjects/SubjectSearch";
import { subjectsData } from "../mock/subjectsData";

function Subjects() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return subjectsData
      .filter((subject) => {
        if (!query) return true;

        return (
          subject.name.toLowerCase().includes(query) ||
          subject.shortName.toLowerCase().includes(query)
        );
      })
      .sort((a, b) => {
        if (b.progress !== a.progress) {
          return b.progress - a.progress;
        }

        return b.solved - a.solved;
      });
  }, [searchTerm]);

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Subjects
          </h1>

          <p className="mt-2 text-gray-500">
            Choose a subject to explore topics and solve questions.
          </p>

          <p className="mt-3 text-sm text-gray-400">
            {filteredSubjects.length}{" "}
            {filteredSubjects.length === 1 ? "Subject" : "Subjects"}
          </p>
        </div>

        <SubjectSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      {/* Subject Grid */}

      <SubjectGrid subjects={filteredSubjects} />
    </div>
  );
}

export default Subjects;