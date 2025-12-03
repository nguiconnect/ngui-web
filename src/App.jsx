import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";
    fetch(`${base}/health`)
      .then((r) => r.json())
      .then((d) => setStatus(d.status || "unknown"))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <div className="p-8 rounded-2xl shadow bg-white">
        <h1 className="text-2xl font-bold mb-2">Ngui Connect — Web</h1>
        <p className="text-sm text-gray-600">
          API /health: <span className="font-mono">{status}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
