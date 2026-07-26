import { useState } from "react";
import { User } from "lucide-react";

const ProfileCard = ({ profile }) => {
  const [formData, setFormData] = useState({
    ...profile,
    college:
      profile.college || "Thapar Institute of Engineering & Technology",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Connect backend
    console.log(formData);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
          <User className="w-5 h-5 text-blue-600" />
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Profile Information
          </h2>

          <p className="text-sm text-gray-500">
            Update your personal information.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            College
          </label>

          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="pt-1">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileCard;