import { Route, Routes } from "react-router-dom";
import './App.css';
import AuthPage from './components/auth/AuthPage';
import AdminPage from "./components/auth/AdminPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import StudentDashboard from "./pages/StudentDashBoard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/studentDash" element={<StudentDashboard />} />
        <Route
          path="/admin"
          element={
            // <ProtectedRoute>
              <AdminPage/>
            /* </ProtectedRoute> */
          }
        />
      </Routes>
    </div>
  );
}

export default App;
