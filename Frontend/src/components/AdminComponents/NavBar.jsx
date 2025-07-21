import { FaHome, FaCalendarAlt, FaBook, FaChartBar, FaFileInvoiceDollar, FaEllipsisH, FaUserTie } from "react-icons/fa";

const NavBar = ( { activeSection, onCourseSetupToggle, onAnalyticsToggle } ) => {

  const navItems = [
    { label: "Home", icon: <FaHome />, key: "home" }, 
    { label: "Schedule", icon: <FaCalendarAlt />, key: "schedule" },
    { label: "Course Setup", icon: <FaBook />, key: "course", action: onCourseSetupToggle },
    { label: "Analytics", icon: <FaChartBar />, key: "analytics", action: onAnalyticsToggle },
    { label: "Fees", icon: <FaFileInvoiceDollar />, key: "fees" },
    { label: "Others", icon: <FaEllipsisH />, key: "others"},
    ];

  
    const currentActive = activeSection || "home";

  return (
    <div className="px-4 sm:px-6">
        <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-md px-3 py-3 flex flex-wrap sm:flex-nowrap justify-between items-center sticky top-0 z-40 ">
            {navItems.map((item, index) => (
                <div
                key={index}
                onClick={item.action || (() => {})}
                className={`flex items-center gap-2 cursor-pointer transition-colors duration-200 text-sm sm:text-base px-2 py-1
                ${currentActive === item.key
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default NavBar;
