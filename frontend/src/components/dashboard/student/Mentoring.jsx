import { useEffect, useState } from "react";
import { Calendar, User, MessageCircle } from "lucide-react";
import { getMentors, getSessions } from "../../../services/mentoringService";


export function Mentoring() {
  const [mentors, setMentors] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [selectedSessionId, setSelectedSessionId] = useState(null);

  useEffect(() => {
    getMentors().then(setMentors);
    getSessions().then((data) => {
      setSessions(data);
      if (data.length > 0) setSelectedSessionId(data[0].id);
    });
  }, []);

  const getMentorById = (id) => mentors.find((m) => m.id === id) || {};

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-full md:max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Mentoring</h2>
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700 transition">
          Request Session
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Upcoming Sessions */}
        <div className="md:flex-1 mb-6 md:mb-0">
          <p className="font-semibold mb-3">Upcoming Sessions</p>
          <div className="space-y-3">
            {sessions.map((session) => {
              const isSelected = session.id === selectedSessionId;
              const mentor = getMentorById(session.mentorId);
              return (
                <div
                  key={session.id}
                  onClick={() => setSelectedSessionId(session.id)}
                  className={`cursor-pointer rounded-lg p-4 border ${
                    isSelected
                      ? "bg-blue-100 border-blue-400"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2 text-blue-700 font-semibold">
                    <Calendar className="w-5 h-5" />
                    <span>{session.topic}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {session.date} - {session.time}
                  </p>
                  <p className="text-xs text-gray-500">with {mentor.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mentors List */}
        <div className="md:flex-1">
          <p className="font-semibold mb-3">Your Mentors</p>
          <div className="space-y-3">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-gray-500" />
                  <div>
                    <p className="font-semibold">{mentor.name}</p>
                    <p className="text-xs text-gray-500">
                      {mentor.department || "Department info"}
                    </p>
                  </div>
                </div>
                <button className="p-1 rounded-full hover:bg-gray-100 transition">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
