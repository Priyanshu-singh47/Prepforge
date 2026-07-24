import {
  FiBell,
  FiChevronDown,
  FiMoon,
  FiSearch,
} from "react-icons/fi";

function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">

      {/* Global Search */}

      <div className="relative w-80">

        <FiSearch
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          title="Search across PrepForge"
          className="h-10 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-16 text-sm placeholder:text-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
          Ctrl + K
        </span>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">

          <FiMoon size={18} />

        </button>

        <button className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">

          <FiBell size={18} />

        </button>

        <div className="h-7 w-px bg-gray-200"></div>

        <button className="group flex items-center gap-3 rounded-lg p-1.5 transition-colors duration-200 hover:bg-gray-100">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-base font-semibold text-white">
            P
          </div>

          <div className="text-left leading-tight">

            <p className="text-sm font-semibold text-gray-900">
              Priyanshu
            </p>

            <p className="text-xs text-gray-500">
              Computer Engineering
            </p>

          </div>

          <FiChevronDown
            size={16}
            className="text-gray-500 transition-transform duration-200 group-hover:rotate-180"
          />

        </button>

      </div>

    </header>
  );
}

export default Navbar;