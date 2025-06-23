import MentorSidebar from "./MentorSidebar";
import MentorChatWindow from "./MentorChatWindow";
import { useState } from "react";

export default function MentorChatLayout() {
  // You would fetch mentors, current selected, etc, here
  const [activeMentor, setActiveMentor] = useState("John Smith");

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md min-h-[65vh] overflow-hidden">
      {/* Sidebar for mentor/contact list */}
      <MentorSidebar activeMentor={activeMentor} setActiveMentor={setActiveMentor} />

      {/* Main chat window */}
      <MentorChatWindow mentor={activeMentor} />
    </div>
  );
}
