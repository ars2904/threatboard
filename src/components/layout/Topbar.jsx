export default function Topbar({ openSidebar }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-gray-800">

      {/* Hamburger (mobile only) */}
      <button
        onClick={openSidebar}
        className="md:hidden text-gray-700 dark:text-gray-200 text-xl"
      >
        ☰
      </button>

      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Dashboard
      </h1>
    </div>
  );
}