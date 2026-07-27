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
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">


      <div className="mb-4 flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Weekly Activity
          </h2>

          <p className="text-sm text-gray-500">
            Questions solved this week
          </p>

        </div>


        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
          {totalSolved} Solved
        </span>


      </div>



      <div className="h-56">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={weeklyData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
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
              tick={{ fill: "#9ca3af" }}
            />


            <YAxis
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af" }}
            />


            <Tooltip />


            <Bar
              dataKey="solved"
              fill="#2563eb"
              radius={[6, 6, 0, 0]}
              maxBarSize={35}
            />


          </BarChart>

        </ResponsiveContainer>

      </div>


    </div>
  );
}

export default WeeklyProgress;