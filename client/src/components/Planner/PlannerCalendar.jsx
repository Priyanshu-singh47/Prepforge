import { ChevronLeft, ChevronRight } from "lucide-react";

function PlannerCalendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          July 2026
        </h2>

        <div className="flex gap-2">
          <button className="rounded-lg p-1 hover:bg-gray-100">
            <ChevronLeft size={18} />
          </button>

          <button className="rounded-lg p-1 hover:bg-gray-100">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="mb-2 grid grid-cols-7 text-center text-xs font-medium text-gray-500">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {dates.map((date) => (
          <button
            key={date}
            className={`h-9 w-9 rounded-lg text-sm transition-colors ${
              date === 24
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlannerCalendar;