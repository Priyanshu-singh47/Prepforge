import { Trash2 } from "lucide-react";
import { useState } from "react";

import api from "../../services/api";
import ConfirmModal from "../Common/ConfirmModal";

function UpcomingTasks({ tasks, refreshTasks }) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const completeTask = async (task) => {
    try {
      await api.put(`/planner/${task._id}`, {
        status: "Completed",
      });

      refreshTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const openDeleteModal = (id) => {
    setSelectedTaskId(id);
    setConfirmOpen(true);
  };

  const deleteTask = async () => {
    try {
      setDeleteLoading(true);

      await api.delete(`/planner/${selectedTaskId}`);

      setConfirmOpen(false);
      setSelectedTaskId(null);

      refreshTasks();
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <>
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Upcoming Tasks
        </h2>

        {tasks.length === 0 ? (
          <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-gray-300">
            <p className="text-sm text-gray-500">
              No upcoming tasks.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="rounded-xl border border-gray-100 p-3 transition-colors hover:bg-gray-50"
              >
                <p className="text-sm font-semibold text-gray-900">
                  {task.title}
                </p>

                {task.description && (
                  <p className="mt-1 text-xs text-gray-500">
                    {task.description}
                  </p>
                )}

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                      {task.subject?.shortName || "General"}
                    </span>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        task.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : task.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-semibold text-blue-600">
                      {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => completeTask(task)}
                    className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-medium text-white transition hover:bg-blue-700"
                  >
                    Complete
                  </button>

                  <button
                    onClick={() => openDeleteModal(task._id)}
                    className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ConfirmModal
        open={confirmOpen}
        title="Delete Task"
        message="Are you sure you want to delete this task? This action cannot be undone."
        confirmText="Delete"
        loading={deleteLoading}
        onCancel={() => {
          setConfirmOpen(false);
          setSelectedTaskId(null);
        }}
        onConfirm={deleteTask}
      />
    </>
  );
}

export default UpcomingTasks;