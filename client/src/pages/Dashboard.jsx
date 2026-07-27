import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import api from "../services/api";

import {
  Greeting,
  ContinueStudying,
  QuickLinks,
  Statistics,
  WeeklyProgress,
} from "../components/dashboard";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);

        const { data } = await api.get("/dashboard");

        setDashboardData(data);

      } catch (error) {
        console.error("Failed to fetch dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [location.key]);


  if (loading) {
    return (
      <p className="mt-10 text-center text-gray-600 dark:text-gray-300">
        Loading...
      </p>
    );
  }


  return (
    <div className="space-y-4">

      <Greeting dashboardData={dashboardData} />


      <div className="grid grid-cols-1 gap-4 lg:grid-cols-10 items-stretch">

        <div className="flex lg:col-span-7">
          <ContinueStudying dashboardData={dashboardData} />
        </div>


        <div className="flex lg:col-span-3">
          <QuickLinks />
        </div>

      </div>



      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

        <Statistics dashboardData={dashboardData} />

        <WeeklyProgress dashboardData={dashboardData} />

      </div>


    </div>
  );
}

export default Dashboard;