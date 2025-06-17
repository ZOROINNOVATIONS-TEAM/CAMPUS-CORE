import { Route, Routes } from "react-router-dom";
import './App.css';
import AuthPage from "./components/AuthPage";
import AdminPage from "./components/AdminPage";
import StudentDashboard from "./Student/StudentDashboard ";
import AdminDashboard from "./Admin/AdminDashboard";
import FacultyDashboard from "./Faculty/FacultyDashboard ";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/StudentDash" element={<StudentDashboard/>} />
        <Route path="/AdminDash" element={<AdminDashboard/>} />
        <Route path="/Faculty" element={<FacultyDashboard/>} />




      </Routes>
    </div>
  );
}

export default App;
