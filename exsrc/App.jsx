import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/user/StudentDashboard";
import Login from "./pages/user/Login";
import AdminAuth from "./pages/admin/AdminAuth";
import ProtectedRoute from "./pages/routes/ProtectedRoute";
import './App.css';

export default function App() {
  return (
    <Router>
      <nav style={{ background: '#f0f0f0', padding: '10px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/students" style={{ marginRight: '10px' }}>Students</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<ProtectedRoute><Students /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminAuth />} />
      </Routes>
    </Router>
  );
}
