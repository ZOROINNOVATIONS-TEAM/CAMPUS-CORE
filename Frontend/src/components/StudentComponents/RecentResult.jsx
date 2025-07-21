import { FaArrowRight } from "react-icons/fa";

const RecentResults = ({ recentSubjects }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 w-full lg:w-[80%] transition-colors duration-300 dark:border dark:border-violet-700">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Recent Results</h2>
                <a href="#" className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline flex items-center gap-1">
                    All Results <FaArrowRight className="text-xs" />
                </a>
            </div>

            <div className="flex flex-col gap-4">
                {recentSubjects.map((subject, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center p-3 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-sm transition-colors"
                    >
                        <div>
                            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">{subject.name}</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {subject.type} – {subject.date}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-green-500 dark:text-green-400">
                                {subject.grade.toLowerCase()}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">{subject.score}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <img
                    src="/graph-placeholder.svg"
                    alt="Performance Graph"
                    className="w-full h-32 object-contain opacity-80"
                />
            </div>
        </div>
    );
};

export default RecentResults;
