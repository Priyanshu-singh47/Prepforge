import {
  BookOpen,
  CircleHelp,
  Clock3,
  CalendarDays,
} from "lucide-react";

import { dashboardData } from "../../mock/dashboardData";

function Statistics() {
  const stats = dashboardData.statistics;

  const statCards = [
    {
      icon: BookOpen,
      title: "Subjects",
      value: `${stats.subjectsCompleted}/${stats.totalSubjects}`,
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: CircleHelp,
      title: "Questions",
      value: `${stats.questionsSolved}/${stats.totalQuestions}`,
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Clock3,
      title: "Study Time",
      value: `${stats.totalStudyHours} hrs`,
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: CalendarDays,
      title: "Today",
      value: stats.todayStudyHours,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md">

      <h2 className="mb-3 text-lg font-semibold text-gray-900">
        Statistics
      </h2>

      <div className="grid grid-cols-2 gap-2">

        {statCards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group flex items-center gap-3 rounded-lg border border-gray-100 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >

              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${item.color}`}
              >
                <Icon size={18} />
              </div>

              <div>

                <p className="text-xs text-gray-500">
                  {item.title}
                </p>

                <h3 className="text-base font-bold text-gray-900">
                  {item.value}
                </h3>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Statistics;