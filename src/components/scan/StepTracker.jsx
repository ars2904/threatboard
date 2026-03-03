export default function StepTracker({ currentStep = 0 }) {
  const steps = [
    "Spidering",
    "Mapping",
    "Testing",
    "Validating",
    "Reporting",
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`px-4 py-2 rounded-full text-sm border transition
            ${
              index === currentStep
                ? "bg-[#0CC8A8] text-white border-[#0CC8A8]"
                : index < currentStep
                ? "bg-[#0CC8A8]/10 text-[#0CC8A8] border-[#0CC8A8]/30"
                : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500"
            }
          `}
        >
          {step}
        </div>
      ))}
    </div>
  );
  
}