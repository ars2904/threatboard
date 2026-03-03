export default function StatusChip({ status }) {
  const styles = {
    Completed: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    Scheduled: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
    Failed: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    "In Progress": "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded-full ${
        styles[status] || "bg-gray-200 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}