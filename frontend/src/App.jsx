import { Route, Routes } from "react-router-dom";
import './App.css';
import AdminPage from "./components/auth/AdminPage";
import AuthPage from './components/auth/AuthPage';
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Dashboard from './pages/AdminDashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/dashboard/*" element={
          // <ProtectedRoute>
            <Dashboard isAdmin={true} />
          /* </ProtectedRoute> */
        } />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              {/* <Dashboard isAdmin={false} /> */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
