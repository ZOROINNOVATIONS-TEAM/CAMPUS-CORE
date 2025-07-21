
import { Route, Routes } from "react-router-dom";
import './App.css';
import AdminPage from "./components/auth/AdminPage";
import AuthPage from './components/auth/AuthPage';
// import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import AdminDashboard from './pages/AdminDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import StudentDashboard from "./pages/StudentDashboard";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
        <Route path="/faculty/dashboard/*" element={<FacultyDashboard />} />
        <Route path="/student/dashboard/*" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
