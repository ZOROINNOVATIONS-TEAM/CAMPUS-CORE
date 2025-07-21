const UpcomingDues = ({ dues }) => {
    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md text-gray-800 dark:text-gray-100 dark:border dark:border-violet-700">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Upcoming Dues</h2>
                <span className="text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
                    View All
                </span>
            </div>

            <div className="space-y-4">
                {dues.map((item, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-xl border ${item.highlight
                            ? "bg-yellow-50 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-700"
                            : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                            }`}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Due by {item.due}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {item.note}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-base font-semibold mb-2">{item.amount}</p>
                                <button
                                    className={`px-4 py-1 rounded-md text-sm ${item.button === "Pay Now"
                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                                        }`}
                                >
                                    {item.button}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingDues;
