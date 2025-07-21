import {
    FaHome,
    FaCalendarAlt,
    FaBook,
    FaChartBar,
    FaFileInvoiceDollar,
    FaEllipsisH,
    FaUserTie,
} from "react-icons/fa";
import logo from '../../assets/logo.png';

const NavBar = ({
    activeSection,
    onCourseSetupToggle,
    onFeesToggle,
    onScheduleToggle,
    onResultToggle,
    onOthersToggle,
    onMentorToggle,
    onHomeToggle,
}) => {
    const navItems = [
        { label: "Home", icon: <FaHome />, key: "home", action: onHomeToggle },
        { label: "Schedule", icon: <FaCalendarAlt />, key: "schedule", action: onScheduleToggle },
        { label: "Course Setup", icon: <FaBook />, key: "course", action: onCourseSetupToggle },
        { label: "Results", icon: <FaChartBar />, key: "result", action: onResultToggle },
        { label: "Fees", icon: <FaFileInvoiceDollar />, key: "fees", action: onFeesToggle },
        { label: "Others", icon: <FaEllipsisH />, key: "others", action: onOthersToggle },
        { label: "Mentor", icon: <FaUserTie />, key: "mentor", action: onMentorToggle },
    ];

    const currentActive = activeSection || "home";

    return (
        <>
            <div className="sm:hidden">
                <div className="fixed top-0 left-0 h-screen w-12 bg-white dark:bg-gray-800 dark:border dark:border-violet-700 shadow-lg z-50 flex flex-col items-center pt-4 gap-6">
                    <div className="mb-2">
                        <img
                            src={logo}
                            alt="CampusCore"
                            className="w-8 h-8 object-contain"
                        />
                    </div>
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={item.action || (() => { })}
                            className={`flex flex-col items-center cursor-pointer text-xs ${currentActive === item.key
                                ? "text-blue-600 font-semibold"
                                : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-[10px]">{item.label.split(" ")[0]}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hidden sm:block px-4 sm:px-6">
                <div className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-800 border dark:border-violet-700 rounded-2xl shadow-md px-3 py-3 flex flex-wrap sm:flex-nowrap justify-between items-center sticky top-0 z-40">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={item.action || (() => { })}
                            className={`flex items-center gap-2 cursor-pointer transition-colors duration-200 text-sm sm:text-base px-2 py-1 ${currentActive === item.key
                                ? "text-blue-600 font-semibold"
                                : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="hidden sm:inline">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NavBar;
