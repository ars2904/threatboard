export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded">
      <div
        className="bg-[#0CC8A8] h-2 rounded"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
