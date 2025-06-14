import { Route, Routes } from "react-router-dom";
import './App.css';
import AuthPage from "./components/AuthPage";
import AdminPage from "./components/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
