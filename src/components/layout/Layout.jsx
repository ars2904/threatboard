import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-gray-50 dark:bg-[#0F1115]">
      
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Drawer Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-[#1A1A1A]
          transform transition-transform duration-300 ease-in-out
          md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar open={isOpen} setOpen={setIsOpen} />
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
        {/* Topbar with hamburger */}
        <Topbar openSidebar={() => setIsOpen(true)} />

        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="p-6"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}