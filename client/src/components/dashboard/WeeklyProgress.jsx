import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

function WeeklyProgress({ dashboardData }) {

  const percentage =
    dashboardData?.statistics?.completionPercentage || 0;

  const data = [
    {
      name: "Completion",
      value: percentage,
    },
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md">

      <div className="mb-2 flex items-center justify-between">

        <h2 className="text-lg font-semibold text-gray-900">
          Overall Progress
        </h2>

        <span className="text-lg font-bold text-blue-600">
          {percentage}%
        </span>

      </div>

      <div className="h-52">

        <ResponsiveContainer width="100%" height="100%">

          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="100%"
            barSize={18}
            data={data}
            startAngle={90}
            endAngle={-270}
          >

            <RadialBar
              dataKey="value"
              fill="#2563eb"
              cornerRadius={10}
            />

            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-900 text-xl font-bold"
            >
              {percentage}%
            </text>

          </RadialBarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default WeeklyProgress;