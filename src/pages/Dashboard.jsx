import { useState } from "react";
import Layout from "../components/layout/Layout";
import ScanTable from "../components/dashboard/ScanTable";
import SeverityCard from "../components/dashboard/SeverityCard";
import { scans } from "../data/scans";

export default function Dashboard() {
  const [toast, setToast] = useState("");

  // Calculate stats dynamically
  const totalScans = scans.length;
  const scheduledScans = scans.filter((s) => s.status === "Scheduled").length;
  const failedScans = scans.filter((s) => s.status === "Failed").length;

  const handleClick = (action) => {
    setToast(`${action} clicked!`);
    setTimeout(() => setToast(""), 2000); // clear after 2s
  };

  return (
    <Layout>
      <div className="space-y-10">
        {/* Page Header */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Overview of organization’s security scans
          </p>
        </div>

        {/* Organization Summary Card */}
        <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Fenrir Security
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Owner: Unknown • Last updated 2 minutes ago
              </p>
            </div>
            <div className="flex gap-8 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Total Scans</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {totalScans}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Scheduled</p>
                <p className="text-xl font-semibold text-yellow-500">
                  {scheduledScans}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Failed</p>
                <p className="text-xl font-semibold text-red-500">
                  {failedScans}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Severity Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SeverityCard title="Critical" count={4} color="red" />
          <SeverityCard title="High" count={9} color="orange" />
          <SeverityCard title="Medium" count={14} color="yellow" />
          <SeverityCard title="Low" count={22} color="green" />
        </div>

        {/* Scan Table Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Recent Scans
          </h3>

          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => handleClick("New Scan")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              New Scan
            </button>
            <button
              onClick={() => handleClick("Export Report")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Export Report
            </button>
            <button
              onClick={() => handleClick("Stop Scan")}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Stop Scan
            </button>
          </div>

          {/* Toast message */}
          {toast && (
            <div className="mb-4 text-sm text-teal-600 dark:text-teal-400">
              {toast}
            </div>
          )}

          <ScanTable scans={scans} />
        </div>
      </div>
    </Layout>
  );
}
