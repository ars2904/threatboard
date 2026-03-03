
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ScansPage from "../pages/ScansPage";   
import ScanDetail from "../pages/ScanDetail"; 

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      
      <Route path="/scans" element={<ScansPage />} />

      <Route path="/scan/:id" element={<ScanDetail />} />
      <Route path="/scans/:id" element={<ScanDetail />} />
    </Routes>
  );
}
