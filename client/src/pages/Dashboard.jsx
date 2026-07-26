import { useEffect, useState } from "react";

import api from "../services/api";

import {
  Greeting,
  ContinueStudying,
  Statistics,
  WeeklyProgress,
} from "../components/dashboard";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const { data } = await api.get("/dashboard");
        setDashboardData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="space-y-4">
      <Greeting dashboardData={dashboardData} />

      <ContinueStudying dashboardData={dashboardData} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Statistics dashboardData={dashboardData} />

        <WeeklyProgress dashboardData={dashboardData} />
      </div>
    </div>
  );
}

export default Dashboard;