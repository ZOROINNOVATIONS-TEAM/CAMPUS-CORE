import { Route, Routes } from "react-router-dom";
import './App.css';
import AuthPage from "./components/AuthPage";
import AdminPage from "./components/AdminPage";
import StudentDashboard from "./pages/StudentDashboard ";
import AdminDashboard from "./pages/AdminDashboard";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/StudentDash" element={<StudentDashboard/>} />
        <Route path="/AdminDash" element={<AdminDashboard/>} />



      </Routes>
    </div>
  );
}

export default App;
