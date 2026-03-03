export default function Card({ children }) {
  return (
    <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-xl shadow">
      {children}
    </div>
  );
}
