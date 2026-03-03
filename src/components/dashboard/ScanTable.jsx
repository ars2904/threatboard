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
      <input
        placeholder="Search scans..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input mb-4"
      />

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-400">
              <th>Name</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Last Scan</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((scan) => (
              <tr
                key={scan.id}
                onClick={() => navigate(`/scan/${scan.id}`)}
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-[#222]"
              >
                <td>{scan.name}</td>
                <td>
                  <StatusChip status={scan.status} />
                </td>
                <td>
                  <ProgressBar value={scan.progress} />
                </td>
                <td>{scan.lastScan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}