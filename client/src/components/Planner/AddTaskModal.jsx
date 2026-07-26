import { X } from "lucide-react";
import { useEffect, useState } from "react";

import api from "../../services/api";

function AddTaskModal({ open, onClose, refreshTasks }) {
  const [subjects, setSubjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    dueDate: "",
    priority: "Medium",
  });

  useEffect(() => {
    if (open) {
      fetchSubjects();
    }
  }, [open]);

  const fetchSubjects = async () => {
    try {
      const { data } = await api.get("/subjects");
      setSubjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.title.trim()) return;

    try {
      await api.post("/planner", formData);

      setFormData({
        title: "",
        description: "",
        subject: "",
        dueDate: "",
        priority: "Medium",
      });

      refreshTasks();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Add Study Task
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-1 hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
            placeholder="Task title"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="">Select Subject</option>

            {subjects.map((subject) => (
              <option key={subject._id} value={subject._id}>
                {subject.shortName}
              </option>
            ))}
          </select>

          <textarea
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description (optional)"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 resize-none"
          />

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-2.5 font-medium hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;