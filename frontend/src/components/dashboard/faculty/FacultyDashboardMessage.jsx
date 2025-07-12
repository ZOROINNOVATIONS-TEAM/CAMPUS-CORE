import { useState, useEffect } from "react";
import FacultyChatWindow from "./FacultyChatWindow";
import { User } from "lucide-react";

export default function FacultyDashboardMessages() {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    setStudents([
      { id: 1, name: "Riya Sharma" },
      { id: 2, name: "Aman Gupta" },
      { id: 3, name: "Anjali Singh" },
    ]);
    setMessages({
      1: [
        { id: 101, from: "student", text: "Sir, please check my assignment.", time: "10:01", edited: false },
        { id: 102, from: "mentor", text: "I will check it today.", time: "10:02", edited: false }
      ],
      2: [
        { id: 201, from: "student", text: "Ma'am, can you help with the project?", time: "9:30", edited: false }
      ],
      3: []
    });
    setSelectedStudentId(1);
  }, []);

  const handleSend = (studentId, text) => {
    setMessages(prev => ({
      ...prev,
      [studentId]: [
        ...(prev[studentId] || []),
        {
          id: Date.now() + Math.random(),
          from: "mentor",
          text,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          edited: false
        }
      ]
    }));
  };

  const handleEdit = (studentId, msgId, newText) => {
    setMessages(prev => ({
      ...prev,
      [studentId]: prev[studentId].map(msg =>
        msg.id === msgId ? { ...msg, text: newText, edited: true } : msg
      )
    }));
  };

  const handleDelete = (studentId, msgId) => {
    setMessages(prev => ({
      ...prev,
      [studentId]: prev[studentId].filter(msg => msg.id !== msgId)
    }));
  };

  const selectedStudent = students.find(s => s.id === selectedStudentId);

  return (
    <div className="flex bg-white dark:bg-[#1e1e1e] dark:text-gray-100 rounded-xl shadow-md max-w-4xl h-[75vh] mx-auto overflow-hidden transition-colors">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-50 dark:bg-[#2a2a2a] border-r border-gray-200 dark:border-gray-600 flex flex-col">
        <div className="p-3 font-bold text-gray-700 dark:text-gray-200">Students</div>
        <div className="flex-1 overflow-y-auto">
          {students.map(student => (
            <div
              key={student.id}
              className={`flex items-center px-4 py-3 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900 
              ${student.id === selectedStudentId ? "bg-blue-100 dark:bg-blue-800 font-semibold" : ""}`}
              onClick={() => setSelectedStudentId(student.id)}
            >
              <User className="w-7 h-7 mr-2 text-blue-400" />
              <div>{student.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedStudent ? (
          <FacultyChatWindow
            student={selectedStudent}
            messages={messages[selectedStudentId] || []}
            onSend={text => handleSend(selectedStudentId, text)}
            onEdit={(msgId, newText) => handleEdit(selectedStudentId, msgId, newText)}
            onDelete={msgId => handleDelete(selectedStudentId, msgId)}
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
            Select a student to chat
          </div>
        )}
      </div>
    </div>
  );
}
