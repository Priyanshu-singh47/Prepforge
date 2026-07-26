import { CheckCircle2, Circle, Trash2 } from "lucide-react";
import { useState } from "react";

import api from "../../services/api";
import ConfirmModal from "../Common/ConfirmModal";

function TodayTasks({ tasks, refreshTasks }) {
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
          Today's Tasks
        </h2>

        {tasks.length === 0 ? (
          <p className="py-8 text-center text-sm text-gray-500">
            No tasks for today.
          </p>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="rounded-xl border border-gray-100 p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {task.status === "Completed" ? (
                      <CheckCircle2
                        size={18}
                        className="text-green-600"
                      />
                    ) : (
                      <Circle
                        size={18}
                        className="text-gray-400"
                      />
                    )}

                    <div>
                      <p
                        className={`text-sm font-medium ${
                          task.status === "Completed"
                            ? "text-gray-500 line-through"
                            : "text-gray-900"
                        }`}
                      >
                        {task.title}
                      </p>

                      <p className="text-xs text-gray-500">
                        {task.subject?.shortName || "General"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {task.status !== "Completed" ? (
                      <button
                        onClick={() => completeTask(task)}
                        className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-medium text-white transition hover:bg-blue-700"
                      >
                        Complete
                      </button>
                    ) : (
                      <span className="rounded-lg bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                        Done
                      </span>
                    )}

                    <button
                      onClick={() => openDeleteModal(task._id)}
                      className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {task.description && (
                  <p className="mt-2 text-sm text-gray-500">
                    {task.description}
                  </p>
                )}

                <div className="mt-2 flex items-center gap-2 text-xs">
                  <span
                    className={`rounded-full px-2 py-1 ${
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

export default TodayTasks;