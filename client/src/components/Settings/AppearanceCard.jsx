import { MonitorCog, Sun, Moon } from "lucide-react";

const AppearanceCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
          <MonitorCog className="w-5 h-5 text-blue-600" />
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Appearance
          </h2>
          <p className="text-sm text-gray-500">
            Customize the app appearance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="rounded-xl border-2 border-blue-600 p-4 flex flex-col items-center gap-2 transition hover:bg-blue-50">
          <Sun className="w-6 h-6 text-blue-600" />

          <span className="font-medium text-blue-600">
            Light
          </span>
        </button>

        <button
          disabled
          className="rounded-xl border border-gray-200 p-4 flex flex-col items-center gap-2 opacity-60 cursor-not-allowed"
        >
          <Moon className="w-6 h-6 text-gray-500" />

          <span className="font-medium text-gray-500">
            Dark
          </span>

          <span className="text-xs text-gray-400">
            Soon
          </span>
        </button>
      </div>
    </div>
  );
};

export default AppearanceCard;