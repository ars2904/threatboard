import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Folder,
  ScanLine,
  Calendar,
  Bell,
  Settings,
  LifeBuoy,
  X,
} from "lucide-react";
import ToggleTheme from "../ui/ToggleTheme";

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

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: ROUTES.dashboard },
  { name: "Projects", icon: Folder, path: ROUTES.projects },
  { name: "Scans", icon: ScanLine, path: ROUTES.scans },
  { name: "Schedule", icon: Calendar, path: ROUTES.schedule },
  { name: "Notifications", icon: Bell, path: ROUTES.notifications },
  { name: "Settings", icon: Settings, path: ROUTES.settings },
  { name: "Support", icon: LifeBuoy, path: ROUTES.support },
];

// Reusable NavItem component
function NavItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
        ${
          isActive
            ? "bg-[#0CC8A8]/10 text-[#0CC8A8]"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
        }
      `
      }
    >
      <Icon size={18} />
      {label}
    </NavLink>
  );
}

// User profile component
function UserProfile({ name, role }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-[#0CC8A8] flex items-center justify-center text-white text-sm font-semibold">
        {name[0]}
      </div>
      <div>
        <p className="text-gray-900 dark:text-gray-100">{name}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </div>
  );
}

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar overlay"
        />
      )}

      <aside
        aria-label="Sidebar navigation"
        className={`
          fixed md:static z-50
          top-0 left-0 h-full w-64
          bg-white dark:bg-[#1A1A1A]
          border-r border-gray-200 dark:border-gray-800
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          flex flex-col overflow-y-auto
        `}
      >
        {/* Top Section */}
        <div className="flex items-center justify-between p-6">
          <h1 className="text-xl font-bold text-[#0CC8A8]">aps</h1>
          <button
            aria-label="Close sidebar"
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              to={item.path}
              icon={item.icon}
              label={item.name}
            />
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-4">
          <ToggleTheme />
          <UserProfile name="Aryan" role="Security Admin" />
        </div>
      </aside>
    </>
  );
}
