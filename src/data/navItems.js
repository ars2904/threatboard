import {
  LayoutDashboard,
  Folder,
  ScanLine,
  Calendar,
  Bell,
  Settings,
  LifeBuoy,
} from "lucide-react";

// Centralized navigation paths only
export const ROUTES = {
  dashboard: "/dashboard",
  projects: "/projects",
  scans: "/scans",
  schedule: "/schedule",
  notifications: "/notifications",
  settings: "/settings",
  support: "/support",
};

// Navigation array used by both desktop & mobile
export const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: ROUTES.dashboard },
  { name: "Projects", icon: Folder, path: ROUTES.projects },
  { name: "Scans", icon: ScanLine, path: ROUTES.scans },
  { name: "Schedule", icon: Calendar, path: ROUTES.schedule },
  { name: "Notifications", icon: Bell, path: ROUTES.notifications },
  { name: "Settings", icon: Settings, path: ROUTES.settings },
  { name: "Support", icon: LifeBuoy, path: ROUTES.support },
];
