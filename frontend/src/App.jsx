import { Route, Routes } from "react-router-dom";
import './App.css';

import AuthPage from './components/auth/AuthPage';
import AdminPage from "./components/auth/AdminPage";
import Dashboard from "./pages/Dashboard"; 
import AdminDashboard from "./pages/AdminDashboard";
import Result from "./pages/Result";
import FeesPage from "./pages/FeesPage";
import Schedule from "./pages/Schedule";
import MessagePage from "./pages/MessagePage";




function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/fees" element={<FeesPage />} />
        <Route path="/result" element={<Result />} />
         <Route path="/schedule" element={<Schedule />} />
         <Route path="/messages" element={<MessagePage />} />
        

      </Routes>
    </div>
  );
}

export default App;
