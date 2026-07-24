import { X } from "lucide-react";

function AddTaskModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Add Study Task
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-4">
          <input
            placeholder="Task Name"
            className="w-full rounded-lg border p-3"
          />

          <select className="w-full rounded-lg border p-3">
            <option>DSA</option>
            <option>DBMS</option>
            <option>OOP</option>
            <option>OS</option>
            <option>CN</option>
            <option>System Design</option>
          </select>

          <input
            type="date"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="time"
            className="w-full rounded-lg border p-3"
          />

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="rounded-lg border px-4 py-2"
            >
              Cancel
            </button>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;