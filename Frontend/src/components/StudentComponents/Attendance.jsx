import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";


const AttendanceSummary = ({ summaryData, chartData }) => {
    return (
        <div className="w-full min-h-3/4 p-6   rounded-xl  transition-colors duration-300 ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Attendance Summary</h2>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                    View Details
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {summaryData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center py-4 rounded-xl transition-colors duration-300 ${item.bg}`}
                    >
                        <div className={`text-2xl mb-2 ${item.color}`}>{item.icon}</div>
                        <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
                            {item.value}%
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 text-sm">{item.label}</div>
                    </div>
                ))}
            </div>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" /> {/* light stroke */}
                        <XAxis dataKey="name" stroke="#6b7280" /> {/* Gray-500 */}
                        <YAxis stroke="#6b7280" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1f2937", // dark gray bg
                                border: "none",
                                color: "#f3f4f6", // light text
                            }}
                            wrapperStyle={{
                                borderRadius: "0.5rem",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                            }}
                            labelStyle={{ color: "#9ca3af" }}
                        />
                        <Legend />
                        <Bar dataKey="Present" stackId="a" fill="#3b82f6" />
                        <Bar dataKey="Late" stackId="a" fill="#facc15" />
                        <Bar dataKey="Absent" stackId="a" fill="#f87171" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AttendanceSummary;
