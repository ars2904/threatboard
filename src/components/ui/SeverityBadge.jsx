export default function SeverityBadge({ level }) {
  const colors = {
    Critical: "bg-red-500",
    High: "bg-orange-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500",
  };

  return (
    <span className={`${colors[level]} text-white px-2 py-1 rounded text-xs`}>
      {level}
    </span>
  );
}
