import { Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import api from "../services/api";

import PlannerCalendar from "../components/Planner/PlannerCalendar";
import TodayTasks from "../components/Planner/TodayTasks";
import UpcomingTasks from "../components/Planner/UpcomingTasks";
import AddTaskModal from "../components/Planner/AddTaskModal";

function Planner() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/planner");
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch planner:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (!task.dueDate || task.status === "Completed") {
        return false;
      }

      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);

      return dueDate.getTime() === today.getTime();
    });
  }, [tasks]);

  const upcomingTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (!task.dueDate || task.status === "Completed") {
        return false;
      }

      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);

      return dueDate > today;
    });
  }, [tasks]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg text-gray-500">
          Loading planner...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Planner
          </h1>

          <p className="mt-1 text-gray-600">
            Organize your study schedule and stay on track.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <PlannerCalendar />

        <TodayTasks
          tasks={todayTasks}
          refreshTasks={fetchTasks}
        />

        <UpcomingTasks
          tasks={upcomingTasks}
          refreshTasks={fetchTasks}
        />
      </div>

      <AddTaskModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        refreshTasks={fetchTasks}
      />
    </div>
  );
}

export default Planner;