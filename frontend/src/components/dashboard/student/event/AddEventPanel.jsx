import React, { useState } from "react";
import EventModal from "./EventModal";

const templates = [
  { id: 1, label: "Personal Coaching", date: "Jan 15, 2025", icon: "👤" },
  { id: 2, label: "Group Study", date: "Jan 16, 2025", icon: "👥" },
  { id: 3, label: "Introductory Lecture", date: "Jan 20, 2025", icon: "📖" },
  { id: 4, label: "Assignment Deadline", date: "Jan 22, 2025", icon: "⏰" },
  { id: 5, label: "Presentation Day", date: "Jan 25, 2025", icon: "🎤" },
];

const AddEventPanel = ({ onAddEvent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (event) => {
    onAddEvent(event);
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-blue-600 text-white py-2 rounded mb-4 font-semibold hover:bg-blue-700"
      >
        Add New Event
      </button>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
      <div>
        <h4 className="font-semibold mb-2">Saved Templates</h4>
        {templates.map((template) => (
          <div key={template.id} className="flex items-center bg-gray-100 rounded p-3 mb-2">
            <span className="mr-3 text-xl">{template.icon}</span>
            <div>
              <div className="font-medium">{template.label}</div>
              <div className="text-xs text-gray-500">{template.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddEventPanel;

