import Layout from "../components/layout/Layout";
import ScanTable from "../components/dashboard/ScanTable";
import SeverityCard from "../components/dashboard/SeverityCard";
import { scans } from "../data/scans";

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-10">

        {/* Page Header */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Overview of your organization’s security scans
          </p>
        </div>

        {/* Organization Summary Card */}
        <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

            {/* Left Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Fenrir Security
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Owner: Aryan • Last updated 2 minutes ago
              </p>
            </div>

            {/* Right Stats */}
            <div className="flex gap-8 text-sm">

              <div>
                <p className="text-gray-500 dark:text-gray-400">Total Scans</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  24
                </p>
              </div>

              <div>
                <p className="text-gray-500 dark:text-gray-400">Scheduled</p>
                <p className="text-xl font-semibold text-yellow-500">
                  6
                </p>
              </div>

              <div>
                <p className="text-gray-500 dark:text-gray-400">Failed</p>
                <p className="text-xl font-semibold text-red-500">
                  2
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
          <ScanTable scans={scans} />
        </div>

      </div>
    </Layout>
  );
}