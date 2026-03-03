import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import StepTracker from "../components/scan/StepTracker";
import ConsolePanel from "../components/scan/ConsolePanel";
import FindingCard from "../components/scan/FindingCard";
import { findings } from "../data/findings";
import { scans } from "../data/scans";
import ProgressRing from "../components/ui/ProgressRing";

function SectionHeader({ title }) {
  return (
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
      {title}
    </h3>
  );
}

export default function ScanDetail() {
  const { id } = useParams();

  const scan = scans.find((s) => String(s.id) === String(id));

  if (!scan) {
    return (
      <Layout>
        <div className="p-6 text-red-500 font-semibold">
          Scan not found
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">

        <section className="bg-white dark:bg-[#1A1A1A] p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-6">
            <ProgressRing progress={scan.progress} />

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {scan.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {scan.status} • {scan.startedAt}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <StepTracker currentStep={scan.currentStep} />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SectionHeader title="Live Scan Console" />
            <ConsolePanel />
          </div>

          <div>
            <SectionHeader title="Finding Log" />
            <div className="space-y-4">
              {findings.map((f) => (
                <FindingCard key={f.id} finding={f} />
              ))}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
