const QuickPay = ({ methods }) => {
    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md text-gray-700 dark:text-gray-200 dark:border dark:border-violet-700">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Quick Pay</h2>
                <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700">
                    Pay Outstanding Balance
                </button>
            </div>

            <div className="space-y-4">
                <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Saved Payment Methods</h3>
                    <div className="space-y-2">
                        {methods.map((method, i) => (
                            <div
                                key={i}
                                className="border rounded-md px-4 py-2 text-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                            >
                                {method}
                            </div>
                        ))}
                        <button className="w-full text-blue-600 dark:text-blue-400 text-sm mt-1 hover:underline">
                            + Add Payment Method
                        </button>
                    </div>
                </div>

                <div className="pt-4 border-t dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Receipts & Documents</h3>
                    <div className="space-y-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm px-3 py-1.5 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">
                            Download All Receipts
                        </button>
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm px-3 py-1.5 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">
                            Print Fee Statement
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickPay;
