import { Route, Routes } from "react-router-dom";
import './App.css';
import AuthPage from './components/auth/AuthPage';
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage />} />

      </Routes>
    </div>
  );
}

export default App;
