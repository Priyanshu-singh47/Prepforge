import { LogOut } from "lucide-react";

const DangerZone = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Account Actions
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Manage important account actions.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-red-600 font-medium hover:bg-red-100 transition">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default DangerZone;