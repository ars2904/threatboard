export default function Input(props) {
  return (
    <input
      {...props}
      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111] focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
    />
  );
}