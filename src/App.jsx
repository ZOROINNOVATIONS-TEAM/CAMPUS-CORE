import React from 'react';
import Login from './Pages/Login'
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';


function App() {
  return (
    <div className="flex h-screen font-sans">
      <LeftPanel />
      <RightPanel/>
      
    </div>
  );
}

export default App;

