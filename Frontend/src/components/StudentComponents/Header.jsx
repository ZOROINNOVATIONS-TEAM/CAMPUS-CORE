import { FaCalendarAlt, FaClock, FaIdBadge, FaChalkboardTeacher } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Header = ({
  name = "Avinash",
  day = "Wednesday",
  date = "June 15, 2025",
  semester = "Sem V",
  studentId = "STU2025XX",
  nextClass = { subject: "Mathematics", time: "45" },
}) => {
  return (
    <div className="px-4 sm:px-6">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 bg-gradient-to-r from-blue-400 to-violet-500 text-white rounded-2xl flex flex-row flex-wrap items-center justify-between gap-4 my-6">
            {/* Left: Welcome & Info */}
            <div>
                <h2 className="text-xl font-semibold">Welcome back, {name}!</h2>
                <div className="mt-2 text-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        {day}, <FaCalendarAlt /> {date} | {semester}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaIdBadge /> ID: {studentId}
                    </div>
                </div>
            </div>

            {/* Right: Next Class Info */}
            {nextClass.subject && (
            <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 px-3 py-2 rounded-xl bg-blue-300 bg-opacity-20 backdrop-blur-md shadow-md text-sm w-fit mt-4 lg:mt-0">
                <FaChalkboardTeacher className="text-white text-lg sm:mt-0 mt-1" />
                <div className="leading-snug">
                    <div>
                    Next Class: <strong>{nextClass.subject}</strong>
                    </div>
                    <div>
                    in <strong>{nextClass.time} minutes</strong>
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
  );
};

export default Header;
