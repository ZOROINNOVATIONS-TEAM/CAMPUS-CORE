import React from "react";

const TabButton = ({ name, icon, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(name)}
    className={`flex items-center justify-center gap-1 px-3 py-2 rounded-full text-sm transition ${
      activeTab === name ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
    }`}
  >
    {icon}
    {name}
  </button>
);

export default TabButton;