import { useEffect } from "react";

export default function Toast({ message, visible, setVisible }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisible(false), 3000); // auto hide 3s
      return () => clearTimeout(timer);
    }
  }, [visible, setVisible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-900 text-white px-4 py-2 rounded shadow-lg text-sm">
      {message}
    </div>
  );
}