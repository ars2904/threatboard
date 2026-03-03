import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatusChip from "../ui/StatusChip";
import ProgressBar from "../ui/ProgressBar";

export default function ScanTable({ scans }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const filtered = scans.filter((scan) =>
    scan.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-xl shadow">
      {/* Search */}
      <input
        placeholder="Search scans..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input mb-4"
      />

      {/* Table with horizontal scroll */}
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-sm text-gray-400">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 hidden md:table-cell">Progress</th>
              <th className="px-4 py-2 hidden md:table-cell">Last Scan</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((scan) => (
              <tr
                key={scan.id}
                onClick={() => navigate(`/scan/${scan.id}`)}
                className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-900/30"
              >
                <td className="px-4 py-3">{scan.name}</td>
                <td className="px-4 py-3">
                  <StatusChip status={scan.status} />
                </td>
                <td className="px-4 py-3">
                  <ProgressBar value={scan.progress} />
                </td>
                <td className="px-4 py-3 hidden md:table-cell">{scan.lastScan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}