import {
  FiHome,
  FiBookOpen,
  FiCalendar,
  FiBarChart2,
  FiFileText,
  FiBookmark,
  FiSettings,
} from "react-icons/fi";

export const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: FiHome },
  { name: "Subjects", path: "/subjects", icon: FiBookOpen },
  { name: "Planner", path: "/planner", icon: FiCalendar },
  { name: "Progress", path: "/progress", icon: FiBarChart2 },
  { name: "Notes", path: "/notes", icon: FiFileText },
  { name: "Bookmarks", path: "/bookmarks", icon: FiBookmark },
  { name: "Settings", path: "/settings", icon: FiSettings },
];