export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-[#0CC8A8] hover:opacity-90 text-white px-4 py-2 rounded-lg transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
