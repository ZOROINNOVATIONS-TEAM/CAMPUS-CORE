import { FaFlask, FaCoffee, FaChalkboardTeacher, FaCalendarAlt, FaMusic, FaUsers } from "react-icons/fa";

export default function InfoCardsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
      {/* Recent Locations */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-bold text-lg mb-3">Your Recent Locations</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaFlask className="text-blue-400" size={22} />
            <div>
              <div className="font-medium">Computer Science Lab</div>
              <div className="text-gray-500 text-xs">Today, 10:30 AM</div>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <FaCoffee className="text-yellow-400" size={22} />
            <div>
              <div className="font-medium">Campus Café</div>
              <div className="text-gray-500 text-xs">Yesterday, 1:15 PM</div>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <FaChalkboardTeacher className="text-green-400" size={22} />
            <div>
              <div className="font-medium">Study Room 204</div>
              <div className="text-gray-500 text-xs">Jun 16, 4:30 PM</div>
            </div>
          </li>
        </ul>
      </div>
      {/* Upcoming Classes */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-bold text-lg mb-3">Upcoming Classes</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaFlask className="text-blue-400" size={22} />
            <div>
              <div className="font-medium">Advanced Algorithms</div>
              <div className="text-gray-500 text-xs">Science Building, Room 302</div>
            </div>
            <span className="ml-auto text-gray-400 text-sm">11:00 AM</span>
          </li>
          <li className="flex items-center gap-3">
            <FaFlask className="text-purple-400" size={22} />
            <div>
              <div className="font-medium">Chemistry Lab</div>
              <div className="text-gray-500 text-xs">Chemistry Building, Lab 4</div>
            </div>
            <span className="ml-auto text-gray-400 text-sm">2:30 PM</span>
          </li>
          <li className="flex items-center gap-3">
            <FaChalkboardTeacher className="text-green-400" size={22} />
            <div>
              <div className="font-medium">Business Ethics</div>
              <div className="text-gray-500 text-xs">Business Building, Room 105</div>
            </div>
            <span className="ml-auto text-gray-400 text-sm">4:15 PM</span>
          </li>
        </ul>
      </div>
      {/* Campus Events Today */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-bold text-lg mb-3">Campus Events Today</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaCalendarAlt className="text-red-400" size={22} />
            <div>
              <div className="font-medium">Career Fair</div>
              <div className="text-gray-500 text-xs">Student Center, Main Hall</div>
            </div>
            <span className="ml-auto text-gray-400 text-sm">10:00 AM</span>
          </li>
          <li className="flex items-center gap-3">
            <FaMusic className="text-yellow-400" size={22} />
            <div>
              <div className="font-medium">Concert: Jazz Ensemble</div>
              <div className="text-gray-500 text-xs">Arts Building, Auditorium</div>
            </div>
            <span className="ml-auto text-gray-400 text-sm">7:00 PM</span>
          </li>
          <li className="flex items-center gap-3">
            <FaUsers className="text-purple-400" size={22} />
            <div>
              <div className="font-medium">Student Club Fair</div>
              <div className="text-gray-500 text-xs">Campus Quad</div>
            </div>
            <span className="ml-auto text-gray-400 text-sm">3:00 PM</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
