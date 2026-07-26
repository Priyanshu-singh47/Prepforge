function Greeting({ dashboardData }) {
  const hour = new Date().getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17) {
    greeting = "Good Evening";
  }

  const streak = dashboardData?.user?.currentStreak || 0;

  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          {greeting}, {dashboardData?.user?.name} 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Ready to ace your placement journey?
        </p>
      </div>

      <div className="rounded-full bg-orange-100 px-4 py-2 transition-all duration-300 hover:bg-orange-200">
        <span className="text-sm font-semibold text-orange-600">
          🔥 {streak} Day{streak !== 1 ? "s" : ""} Streak
        </span>
      </div>
    </div>
  );
}

export default Greeting;