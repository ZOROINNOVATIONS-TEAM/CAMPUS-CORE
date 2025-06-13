import { Route, Routes } from "react-router-dom";
import './App.css';
import AuthPage from './components/auth/AuthPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
