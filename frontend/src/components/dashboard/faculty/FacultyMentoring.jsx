import { useState, useRef, useEffect } from "react";
import { User, Calendar } from "lucide-react";
import FacultyChatWindow from "./FacultyChatWindow";
import FacultyCreateSessionModal from "./FacultyCreateSessionModal";

export default function FacultyMentoring() {
  const [students, setStudents] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [messages, setMessages] = useState({});
  const [sidebarTab, setSidebarTab] = useState("chats");
  const [createSessionOpen, setCreateSessionOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setStudents([
      { id: 1, name: "Riya Sharma" },
      { id: 2, name: "Aman Gupta" },
      { id: 3, name: "Anjali Singh" },
      { id: 4, name: "Nikhil Verma" },
    ]);
    setSessions([
      {
        id: 11,
        topic: "Career Counseling",
        date: "2025-06-25",
        time: "12:30",
        studentIds: [2, 4],
      },
      {
        id: 12,
        topic: "Project Discussion",
        date: "2025-06-26",
        time: "15:00",
        studentIds: [1, 3],
      }
    ]);
    setMessages({
      1: [
        { id: 101, from: "student", text: "Sir, please check my assignment.", time: "10:01", edited: false },
        { id: 102, from: "mentor", text: "I will check it today.", time: "10:02", edited: false }
      ],
      2: [
        { id: 201, from: "student", text: "Ma'am, can you help with the project?", time: "9:30", edited: false }
      ],
      3: [],
      4: [],
    });
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

  const handleCreateSession = (session) => {
    setSessions(prev => [
      ...prev,
      { ...session, id: Date.now() + Math.random() }
    ]);
    setCreateSessionOpen(false);
  };

  const selectedStudent = students.find(s => s.id === selectedStudentId);

  const openSessionChat = (session) => {
    setSidebarTab("chats");
    if (session.studentIds?.length > 0) {
      setSelectedStudentId(session.studentIds[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0e0e11] py-4 transition-colors duration-300">
      <div className="flex flex-col md:flex-row bg-white dark:bg-[#1a1a1d] rounded-xl shadow-md max-w-4xl h-[80vh] mx-auto overflow-hidden relative">
        {/* Sidebar */}
        <div className="w-full md:w-80 bg-white dark:bg-[#121214] border-r dark:border-zinc-800 flex flex-col z-10 h-full shadow-sm">
          {/* Button */}
          <div className="flex gap-2 p-4 border-b dark:border-zinc-800 bg-white dark:bg-[#121214] sticky top-0 z-20">
            <button
              className="flex-1 bg-green-600 text-white py-2 rounded-full font-semibold hover:bg-green-700 transition shadow"
              onClick={() => setCreateSessionOpen(true)}
            >
              New Session
            </button>
          </div>

          {/* Chats Section */}
          <div className="p-4 flex-1 overflow-y-auto">
            <div className="mb-2 font-semibold text-gray-600 dark:text-zinc-400 text-xs tracking-wide uppercase">
              Students
            </div>
            <div className="flex flex-col gap-2 mb-6">
              {students.map(student => (
                <button
                  key={student.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition font-medium
                    ${
                      student.id === selectedStudentId
                        ? "bg-blue-50 dark:bg-blue-900 border-blue-400 text-blue-700 dark:text-blue-300 shadow"
                        : "bg-white dark:bg-transparent border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-200"
                    }`}
                  onClick={() => { setSelectedStudentId(student.id); setSidebarTab("chats"); }}
                >
                  <User className="w-7 h-7 text-blue-400 dark:text-blue-300" />
                  <span className="truncate">{student.name}</span>
                </button>
              ))}
            </div>

            {/* Sessions Section */}
            <div className="mb-2 font-semibold text-gray-600 dark:text-zinc-400 text-xs tracking-wide uppercase">
              Scheduled Sessions
            </div>
            <div className="flex flex-col gap-2">
              {sessions.map(session => (
                <button
                  key={session.id}
                  className={`p-3 rounded-lg border transition text-left
                    ${
                      session.id === selectedSessionId
                        ? "bg-green-50 dark:bg-green-900 border-green-400 text-green-700 dark:text-green-300 shadow"
                        : "bg-white dark:bg-transparent border-gray-200 dark:border-zinc-700 hover:bg-green-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-200"
                    }`}
                  onClick={() => { setSelectedSessionId(session.id); openSessionChat(session); }}
                >
                  <div className="flex items-center gap-2 font-semibold">
                    <Calendar className="w-5 h-5" />
                    <span>{session.topic}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-zinc-400 mt-1">
                    {session.date} at {session.time}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-zinc-500">
                    {session.studentIds.map((id, idx) => {
                      const s = students.find(stu => stu.id === id);
                      return s ? (idx === 0 ? s.name : `, ${s.name}`) : null;
                    })}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Panel */}
        {selectedStudentId && (
          <div className={`
            flex-1 flex flex-col bg-white dark:bg-[#1a1a1d] md:static
            ${isMobile ? "fixed inset-0 z-50 h-screen w-screen" : ""}
          `}>
            <FacultyChatWindow
              student={selectedStudent}
              messages={messages[selectedStudentId] || []}
              onSend={text => handleSend(selectedStudentId, text)}
              onEdit={(msgId, newText) => handleEdit(selectedStudentId, msgId, newText)}
              onDelete={msgId => handleDelete(selectedStudentId, msgId)}
              isMobile={isMobile}
              onClose={() => setSelectedStudentId(null)}
            />
          </div>
        )}
      </div>

      {/* Create Session Modal */}
      <FacultyCreateSessionModal
        open={createSessionOpen}
        onClose={() => setCreateSessionOpen(false)}
        students={students}
        onCreate={handleCreateSession}
      />
    </div>
  );
}
