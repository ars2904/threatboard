export default function Topbar({ openSidebar }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-gray-800">
      
      {/* Hamburger for mobile */}
      <button
        onClick={openSidebar}
        className="md:hidden text-gray-700 dark:text-gray-200 text-2xl"
        aria-label="Open sidebar"
      >
        ☰
      </button>

      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Fenrir Security
      </h1>
      
      {/* Empty div to balance spacing on mobile */}
      <div className="w-6 md:hidden"></div>
    </div>
  );
}