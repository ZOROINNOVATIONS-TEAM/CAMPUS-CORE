const Announcements = ({ announcements }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 w-full lg:w-[80%] transition-colors duration-300 border dark:border-violet-700">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Announcements</h2>
                <a href="#" className="text-sm text-blue-500 dark:text-blue-400 font-medium">View All</a>
            </div>
            <div className="flex flex-col gap-4">
                {announcements.map((item, index) => (
                    <div
                        key={index}
                        className="border-l-4 pl-3 border-red-400 text-sm text-gray-700 dark:text-gray-200 dark:border-red-500 transition-colors"
                    >
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold">{item.title}</span>
                            {item.tag && (
                                <span className="text-xs text-white bg-red-500 px-2 py-0.5 rounded">
                                    {item.tag}
                                </span>
                            )}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            {item.by} · {item.date}
                        </div>
                        <div className="text-sm">{item.description}</div>
                        <a
                            href="#"
                            className="text-xs text-blue-500 dark:text-blue-400 mt-1 inline-block"
                        >
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;
