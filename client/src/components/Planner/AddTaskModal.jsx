import { X } from "lucide-react";

function AddTaskModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Header */}

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Add Study Task
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-1 transition-colors hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}

        <div className="space-y-4">
          {/* Task */}

          <input
            type="text"
            placeholder="Enter task name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500"
          />

          {/* Subject */}

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700 outline-none transition-colors focus:border-blue-500">
            <option value="">Select Subject</option>

            <option>DSA</option>
            <option>DBMS</option>
            <option>OOP</option>
            <option>Operating System</option>
            <option>Computer Networks</option>
            <option>System Design</option>
            <option>Aptitude</option>
          </select>

          {/* Date */}

          <input
            type="date"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500"
          />

          {/* Time */}

          <select
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700 outline-none transition-colors focus:border-blue-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select Time
            </option>

            {Array.from({ length: 48 }, (_, i) => {
              const hour24 = Math.floor(i / 2);
              const minute = i % 2 === 0 ? "00" : "30";

              const period = hour24 >= 12 ? "PM" : "AM";
              const hour12 = hour24 % 12 || 12;

              return (
                <option key={i}>
                  {`${hour12}:${minute} ${period}`}
                </option>
              );
            })}
          </select>

          {/* Buttons */}

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-2.5 font-medium transition-colors hover:bg-gray-100"
            >
              Cancel
            </button>

            <button className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;