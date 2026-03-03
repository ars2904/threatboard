export default function SeverityCard({ title, count, color }) {
  const colors = {
    red: "text-red-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
    green: "text-green-500",
  };

  return (
    <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-sm transition">
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <p className={`text-3xl font-bold mt-2 ${colors[color]}`}>
        {count}
      </p>
      <p className="text-xs text-gray-400 mt-1">
        +12% from last scan
      </p>
    </div>
  );
}