import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { dashboardData } from "../../mock/dashboardData";

function WeeklyProgress() {
  const data = dashboardData.weeklyProgress;

  const totalHours = data.reduce(
    (sum, day) => sum + day.hours,
    0
  );

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md">

      <div className="mb-2 flex items-center justify-between">

        <h2 className="text-lg font-semibold text-gray-900">
          Weekly Progress
        </h2>

        <span className="text-lg font-bold text-blue-600">
          {totalHours}h
        </span>

      </div>

      <div className="h-32">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: -25,
              bottom: 0,
            }}
          >

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />

            <YAxis hide />

            <Tooltip
              cursor={{ fill: "#f3f4f6" }}
            />

            <Bar
              dataKey="hours"
              radius={[8, 8, 0, 0]}
              fill="#2563eb"
              barSize={30}
              animationDuration={900}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default WeeklyProgress;