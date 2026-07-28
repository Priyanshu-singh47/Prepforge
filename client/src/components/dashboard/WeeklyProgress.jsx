import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function WeeklyProgress({ dashboardData }) {

  const weeklyData = dashboardData?.weeklyActivity || [];

  const totalSolved = weeklyData.reduce(
    (sum, day) => sum + day.solved,
    0
  );


  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">


      <div className="mb-3 sm:mb-4 flex flex-wrap items-center justify-between gap-2">

        <div>

          <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            Weekly Activity
          </h2>

          <p className="text-xs sm:text-sm text-gray-500">
            Questions solved this week
          </p>

        </div>


        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs sm:text-sm font-semibold text-blue-600">
          {totalSolved} Solved
        </span>


      </div>



      <div className="h-48 sm:h-56">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={weeklyData}
            margin={{
              top: 10,
              right: 5,
              left: -25,
              bottom: 0,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#374151"
            />


            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
            />


            <YAxis
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
            />


            <Tooltip />


            <Bar
              dataKey="solved"
              fill="#2563eb"
              radius={[6, 6, 0, 0]}
              maxBarSize={28}
            />


          </BarChart>

        </ResponsiveContainer>

      </div>


    </div>
  );
}

export default WeeklyProgress;