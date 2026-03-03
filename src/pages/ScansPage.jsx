
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { scans } from "../data/scans";
import ProgressRing from "../components/ui/ProgressRing";

export default function ScansPage() {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Scans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scans.map((scan) => (
            <Link
              key={scan.id}
              to={`/scans/${scan.id}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <ProgressRing progress={scan.progress} />

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {scan.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {scan.status} • {scan.lastScan}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
