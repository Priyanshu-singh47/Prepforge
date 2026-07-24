import SubjectProgress from "../components/Progress/SubjectProgress";
import DifficultyProgress from "../components/Progress/DifficultyProgress";
import OverallProgress from "../components/Progress/OverallProgress";
import WeeklyActivity from "../components/Progress/WeeklyActivity";

import { progressData } from "../mock/progressData";

function Progress() {
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
        subjects={progressData.subjects}
      />

      {/* Bottom Cards */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <DifficultyProgress
          difficulty={progressData.difficulty}
        />

        <OverallProgress
          overall={progressData.overall}
        />

        <WeeklyActivity
          weeklyActivity={progressData.weeklyActivity}
        />
      </div>
    </div>
  );
}

export default Progress;