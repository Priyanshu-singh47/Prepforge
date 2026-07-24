import {
  Greeting,
  ContinueStudying,
  Statistics,
  WeeklyProgress,
} from "../components/dashboard";

function Dashboard() {
  return (
    <div className="space-y-4">

      <Greeting />

      <ContinueStudying />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

        <Statistics />

        <WeeklyProgress />

      </div>

    </div>
  );
}

export default Dashboard;