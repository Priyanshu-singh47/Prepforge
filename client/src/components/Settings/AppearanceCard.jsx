import { MonitorCog, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const AppearanceCard = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
          <MonitorCog className="h-5 w-5 text-blue-600" />
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">
            Appearance
          </h2>

          <p className="text-sm text-gray-500">
            Customize the app appearance.
          </p>
        </div>

      </div>


      <div className="grid grid-cols-2 gap-3">


        <button
          onClick={() => {
            if (darkMode) toggleTheme();
          }}
          className={`rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition ${
            !darkMode
              ? "border-blue-600 bg-blue-50"
              : "border-gray-200 dark:border-gray-700 dark:bg-gray-900"
          }`}
        >

          <Sun className="h-6 w-6 text-blue-600" />

          <span className="font-medium text-blue-600">
            Light
          </span>

        </button>



        <button
          onClick={() => {
            if (!darkMode) toggleTheme();
          }}
          className={`rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition ${
            darkMode
              ? "border-blue-600 bg-blue-900/20"
              : "border-gray-200 bg-white"
          }`}
        >

          <Moon className="h-6 w-6 text-gray-500 dark:text-gray-300" />

          <span className="font-medium text-gray-700 dark:text-gray-300">
            Dark
          </span>

        </button>


      </div>

    </div>
  );
};

export default AppearanceCard;