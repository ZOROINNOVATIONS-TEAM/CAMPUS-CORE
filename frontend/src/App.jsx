import { Route, Routes } from "react-router-dom";
import './App.css';
import AuthPage from "./components/AuthPage";
import AdminPage from "./components/AdminPage";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage/>} />

      </Routes>
    </div>
  );
}

export default App;
