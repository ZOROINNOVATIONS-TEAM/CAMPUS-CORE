import { FaBookOpen, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const TodaySchedule = ({ schedule }) => {
    return (
        <div className="bg-white dark:bg-gray-800 border dark:border-violet-700 rounded-2xl p-6 w-full max-w-6xl mx-auto lg:ml-14 shadow transition-colors duration-300">
            <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Today's Schedule</h2>
                <a href="#" className="text-sm text-blue-500 dark:text-blue-400 font-medium">Full Schedule</a>
            </div>
            <div className="flex flex-col gap-3">
                {schedule.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 bg-blue-100 dark:bg-blue-800 bg-opacity-20 dark:bg-opacity-30 p-3 rounded-lg transition-colors"
                    >
                        <div className="p-2 rounded-lg bg-gray-800 text-white dark:bg-gray-700">
                            <FaBookOpen />
                        </div>
                        <div className="text-sm text-gray-800 dark:text-gray-100">
                            <div className="font-medium">{item.subject}</div>
                            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                <FaClock className="text-gray-500 dark:text-gray-400" />
                                {item.time}
                                <FaMapMarkerAlt className="ml-3 text-gray-500 dark:text-gray-400" />
                                {item.room}
                            </div>
                            {item.status && (
                                <div
                                    className={`text-xs font-medium mt-1 ${item.status === "Completed"
                                        ? "text-green-500 dark:text-green-400"
                                        : "text-blue-500 dark:text-blue-400"
                                        }`}
                                >
                                    {item.status}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodaySchedule;
