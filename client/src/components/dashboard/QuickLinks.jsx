import {
  ChevronRight,
  BookOpen,
  Bookmark,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function QuickLinks() {
  const navigate = useNavigate();

  const links = [
    {
      title: "Subjects",
      icon: <BookOpen size={18} />,
      path: "/subjects",
    },
    {
      title: "Bookmarks",
      icon: <Bookmark size={18} />,
      path: "/bookmarks",
    },
    {
      title: "Notes",
      icon: <FileText size={18} />,
      path: "/notes",
    },
  ];

  return (
    <div className="flex w-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Quick Links
      </h2>

      <div className="space-y-2">
        {links.map((link) => (
          <button
            key={link.title}
            onClick={() => navigate(link.path)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <span className="text-blue-600">
                {link.icon}
              </span>

              <span className="text-sm font-medium text-gray-700">
                {link.title}
              </span>
            </div>

            <ChevronRight
              size={18}
              className="text-gray-400"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks;