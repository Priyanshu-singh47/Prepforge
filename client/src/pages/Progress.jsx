import { useEffect, useState } from "react";

import api from "../services/api";

import SubjectProgress from "../components/Progress/SubjectProgress";
import DifficultyProgress from "../components/Progress/DifficultyProgress";
import OverallProgress from "../components/Progress/OverallProgress";
import WeeklyActivity from "../components/Progress/WeeklyActivity";

function Progress() {
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProgress = async () => {
    try {
      const { data } = await api.get("/progress/stats");
      setProgressData(data);
    } catch (error) {
      console.error("Failed to fetch progress:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  if (loading) {
    return (
      <div className="flex h-80 items-center justify-center">
        <p className="text-lg text-gray-500">
          Loading progress...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Progress
        </h1>

        <p className="mt-1 text-gray-500">
          Track your preparation progress across all subjects.
        </p>
      </div>

      {/* Subject Progress */}

      <SubjectProgress
        subjects={progressData.subjectProgress}
      />

      {/* Bottom Cards */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <DifficultyProgress
          difficulty={progressData.difficultyProgress}
        />

        <OverallProgress
          overall={progressData}
        />

        <WeeklyActivity
          weeklyActivity={progressData.weeklyActivity}
        />
      </div>
    </div>
  );
}

export default Progress;