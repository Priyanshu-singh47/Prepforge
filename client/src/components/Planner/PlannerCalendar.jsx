import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

function PlannerCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const dates = useMemo(() => {
    const cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(null);
    }

    for (let i = 1; i <= totalDays; i++) {
      cells.push(i);
    }

    return cells;
  }, [firstDay, totalDays]);

  const today = new Date();

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          {monthName} {year}
        </h2>

        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="rounded-lg p-1 hover:bg-gray-100"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextMonth}
            className="rounded-lg p-1 hover:bg-gray-100"
          >
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
        {dates.map((date, index) =>
          date ? (
            <button
              key={index}
              className={`h-9 w-9 rounded-lg text-sm transition-colors ${
                today.getDate() === date &&
                today.getMonth() === month &&
                today.getFullYear() === year
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {date}
            </button>
          ) : (
            <div key={index} />
          )
        )}
      </div>
    </div>
  );
}

export default PlannerCalendar;