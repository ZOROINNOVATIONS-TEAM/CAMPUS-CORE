import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/user/Login";
import AdminAuth from "./pages/admin/AdminAuth";
import ProtectedRoute from "./pages/routes/ProtectedRoute";
import StudentDashboard from "./pages/user/StudentDashboard";
import AttendanceDetails from "./components/dashboard/student/AttendanceDetails";
import SchedulePage from "./components/dashboard/student/SchedulePage";
import CourseSetup from "./components/dashboard/student/course/CourseSetup";
import AdminDashboard from "./pages/admin/AdminDashboard";


export default function App() {
  return (
    <Router>
      <nav style={{ background: '#f0f0f0', padding: '10px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/students" style={{ marginRight: '10px' }}>Students</Link>
        <Link to="/admin-dashboard" style={{ marginRight: '10px' }}>Admin</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/students" element={<StudentDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminAuth />} />
        <Route path="/attendance" element={<AttendanceDetails />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/course-setup" element={<CourseSetup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
      
    </Router>
  );
}
