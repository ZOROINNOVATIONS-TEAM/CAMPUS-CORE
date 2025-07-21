const FeesOverview = ({ overview, payments }) => {
    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md space-y-6 text-gray-800 dark:text-gray-100 dark:border dark:border-violet-700">
            <h2 className="text-xl font-semibold mb-4">Fees Overview</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Fees</p>
                    <p className="text-xl font-bold">{overview.total}</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-xl text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Amount Paid</p>
                    <p className="text-xl font-bold">{overview.paid}</p>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-xl text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pending Balance</p>
                    <p className="text-xl font-bold">{overview.pending}</p>
                </div>
                <div className="bg-indigo-100 dark:bg-indigo-900 p-4 rounded-xl text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Last Payment</p>
                    <p className="text-xl font-bold">{overview.lastPayment}</p>
                </div>
            </div>

            <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700">
                            <th className="py-2 px-3">Date</th>
                            <th className="py-2 px-3">Transaction ID</th>
                            <th className="py-2 px-3">Description</th>
                            <th className="py-2 px-3">Amount</th>
                            <th className="py-2 px-3">Mode</th>
                            <th className="py-2 px-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((item, idx) => (
                            <tr
                                key={idx}
                                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <td className="py-2 px-3">{item.date}</td>
                                <td className="py-2 px-3 text-blue-600 dark:text-blue-400 underline cursor-pointer">
                                    {item.id}
                                </td>
                                <td className="py-2 px-3">{item.description}</td>
                                <td className="py-2 px-3">{item.amount}</td>
                                <td className="py-2 px-3">{item.mode}</td>
                                <td className="py-2 px-3">
                                    <span className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 px-2 py-1 rounded-full text-xs">
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeesOverview;
