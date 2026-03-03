import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Folder,
  ScanLine,
  Calendar,
  Bell,
  Settings,
  LifeBuoy,
  LogOut,
  X,
} from "lucide-react";
import ToggleTheme from "../ui/ToggleTheme";
import Toast from "../ui/Toast";

// Centralized routes
const ROUTES = {
  dashboard: "/dashboard",
  projects: "/projects",
  scans: "/scans",
  schedule: "/schedule",
  notifications: "/notifications",
  settings: "/settings",
  support: "/support",
};

// Navigation array
const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: ROUTES.dashboard },
  { name: "Projects", icon: Folder, path: ROUTES.projects },
  { name: "Scans", icon: ScanLine, path: ROUTES.scans },
  { name: "Schedule", icon: Calendar, path: ROUTES.schedule },
  { name: "Notifications", icon: Bell, path: ROUTES.notifications },
  { name: "Settings", icon: Settings, path: ROUTES.settings },
  { name: "Support", icon: LifeBuoy, path: ROUTES.support },
];

// User Profile + Logout
function UserSection({ name, role }) {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#0CC8A8] flex items-center justify-center text-white text-sm font-semibold">
          {name[0]}
        </div>
        <div>
          <p className="text-gray-900 dark:text-gray-100">{name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-500/10 rounded-lg transition"
      >
        <LogOut size={16} /> Log Out
      </button>
    </div>
  );
}

// Sidebar Component
export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const comingSoonPages = ["Settings", "Support", "Projects", "Schedule", "Notifications"];

  const handleNavigation = (item) => {
    if (comingSoonPages.includes(item.name)) {
      setToastMessage("This feature is coming soon");
      setToastVisible(true);
      setOpen?.(false);
    } else {
      navigate(item.path);
      setOpen?.(false);
    }
  };

  return (
    <>
      {/* Toast */}
      <Toast
        message={toastMessage}
        visible={toastVisible}
        setVisible={setToastVisible}
      />

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar overlay"
        />
      )}

      {/* Sidebar */}
      <aside
        aria-label="Sidebar navigation"
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-white dark:bg-[#1A1A1A] border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col overflow-y-auto`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-6">
          <h1 className="text-xl font-bold text-[#0CC8A8]">aps</h1>
          <button
            className="md:hidden"
            aria-label="Close sidebar"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
            >
              <item.icon size={18} />
              {item.name}
            </button>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-4">
          <ToggleTheme />
          <UserSection name="Aryan" role="Security Admin" />
        </div>
      </aside>
    </>
  );
}
