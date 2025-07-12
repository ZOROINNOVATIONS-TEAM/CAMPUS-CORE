import { useState } from "react";
import MentorSidebar from "./MentorSidebar";
import MentorChatWindow from "./MentorChatWindow";

export default function MentorChatLayout() {
  const [activeMentor, setActiveMentor] = useState("John Smith");

  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-2xl shadow-md min-h-[65vh] overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-100 dark:border-gray-700">
        <MentorSidebar activeMentor={activeMentor} setActiveMentor={setActiveMentor} />
      </div>

      {/* Chat window */}
      <div className="flex-1">
        <MentorChatWindow mentor={activeMentor} />
      </div>
    </div>
  );
}
