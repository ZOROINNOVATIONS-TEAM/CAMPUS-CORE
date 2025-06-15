import { Route, Routes } from "react-router-dom";
import './App.css';

import AuthPage from './components/auth/AuthPage';
import AdminPage from "./components/auth/AdminPage";
import Dashboard from "./pages/Dashboard"; // ✅ Import your Dashboard page
// import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ New Route */}
      </Routes>
    </div>
  );
}

export default App;
