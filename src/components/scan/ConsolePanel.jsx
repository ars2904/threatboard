import { useEffect, useState } from "react";
import { logs } from "../../data/logs";

export default function ConsolePanel() {
  const [visibleLogs, setVisibleLogs] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleLogs((prev) => [...prev, logs[index]]);
      index++;
      if (index >= logs.length) clearInterval(interval);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-400 font-mono text-sm p-4 rounded-2xl h-96 overflow-y-auto border border-gray-800">
      {visibleLogs.map((log, i) => (
        <p key={i} className="animate-pulse">
          {log}
        </p>
      ))}
    </div>
  );
}
