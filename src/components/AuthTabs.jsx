import React, { useState } from 'react';

function AuthTabs() {
  const [selected, setSelected] = useState('Student');

  return (
    <div className="flex space-x-4 mb-4">
      {['Student', 'Faculty', 'Admin'].map(role => (
        <button
          key={role}
          className={`px-4 py-2 rounded ${selected === role ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
          onClick={() => setSelected(role)}
        >
          {role}
        </button>
      ))}
    </div>
  );
}

export default AuthTabs;
