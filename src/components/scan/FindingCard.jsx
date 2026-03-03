import SeverityBadge from "../ui/SeverityBadge";

export default function FindingCard({ finding }) {
  return (
    <div className="bg-white dark:bg-[#1A1A1A] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-sm transition">

      <div className="flex justify-between items-center mb-2">
        <SeverityBadge level={finding.severity} />
        <span className="text-xs text-gray-400">{finding.time}</span>
      </div>

      <h4 className="font-semibold">{finding.title}</h4>

      <p className="text-sm text-[#0CC8A8] mt-1">
        /api/v1/login
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {finding.description}
      </p>

    </div>
  );
}