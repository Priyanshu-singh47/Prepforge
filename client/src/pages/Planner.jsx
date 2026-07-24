import { Plus } from "lucide-react";
import { useState } from "react";

import PlannerCalendar from "../components/Planner/PlannerCalendar";
import TodayTasks from "../components/Planner/TodayTasks";
import UpcomingTasks from "../components/Planner/UpcomingTasks";
import AddTaskModal from "../components/Planner/AddTaskModal";

import { plannerData } from "../mock/plannerData";

function Planner() {
  const [openModal, setOpenModal] = useState(false);

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
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <PlannerCalendar />

        <TodayTasks tasks={plannerData.todayTasks} />

        <UpcomingTasks tasks={plannerData.upcomingTasks} />
      </div>

      <AddTaskModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
}

export default Planner;