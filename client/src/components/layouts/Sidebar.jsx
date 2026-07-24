import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { navItems } from "../../constants/navigation";

function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">

      {/* Logo */}

      <div className="flex h-[72px] flex-col justify-center border-b border-gray-200 px-6">

        <h1 className="cursor-pointer text-2xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-700">
          PrepForge
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Prepare. Practice. Progress.
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6">

        <p className="mb-4 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
          MENU
        </p>

        <div className="space-y-2">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                    isActive
                      ? "border border-blue-100 bg-blue-50 font-semibold text-blue-600 shadow-sm"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 hover:translate-x-1"
                  }`
                }
              >
                <Icon
                  size={22}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-[15px]">
                  {item.name}
                </span>
              </NavLink>
            );
          })}

        </div>

      </nav>

      {/* Bottom */}

      <div className="border-t border-gray-200 p-4">

        <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
          ACCOUNT
        </p>

        <button className="group flex w-full items-center gap-4 rounded-xl px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-red-50 hover:text-red-600 hover:translate-x-1">

          <FiLogOut
            size={21}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <span className="text-[15px] font-medium">
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;