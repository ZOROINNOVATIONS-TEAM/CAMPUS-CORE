import React from "react";
import {
    PieChart, Pie, Cell,
    LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

const OverallResult = ({ pieData, lineData, subjects, externalAssessment }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 text-gray-800 dark:text-gray-100 ">

            <div className="col-span-1 lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-6 dark:border dark:border-violet-700" >
                <div>
                    <h2 className="text-2xl font-bold">Overall Performance</h2>
                    <p className="text-gray-500 dark:text-gray-400">Summary of your performance across assessments.</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
                        Analyze Performance
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 mt-4">
                    <div className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-6 py-4 rounded-xl w-full">
                        <p className="text-sm">Average Score</p>
                        <p className="text-2xl font-bold">80.25%</p>
                    </div>
                    <div className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-6 py-4 rounded-xl w-full">
                        <p className="text-sm">Passed Subjects</p>
                        <p className="text-2xl font-bold">6</p>
                    </div>
                    <div className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-6 py-4 rounded-xl w-full">
                        <p className="text-sm">Failed Subjects</p>
                        <p className="text-2xl font-bold">2</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mt-6 mb-2">Internal Assessment</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {subjects.map((subj, i) => (
                            <div key={i} className="border p-4 rounded-xl shadow bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <p className="font-bold">{subj.name}</p>
                                <p className="text-sm">Final Score: {subj.score}%</p>
                                <span className={`inline-block mt-1 px-3 py-1 text-xs rounded-full
                                    ${subj.status === "Excellent"
                                        ? "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200"
                                        : "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200"}`}>
                                    {subj.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mt-6 mb-2">External Assessment</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {externalAssessment.map((subj, i) => (
                            <div key={i} className="border p-4 rounded-xl shadow bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <p className="font-bold">{subj.subject}</p>
                                <p className="text-sm">Final Score: {subj.score}%</p>
                                <span className={`inline-block mt-1 px-3 py-1 text-xs rounded-full
                                    ${subj.status === "Passed"
                                        ? "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200"
                                        : "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200"}`}>
                                    {subj.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow dark:border dark:border-violet-700">
                    <h3 className="font-semibold mb-2">Assignment Results</h3>
                    <PieChart width={300} height={250}>
                        <Pie
                            data={pieData}
                            cx={150}
                            cy={120}
                            innerRadius={50}
                            outerRadius={90}
                            dataKey="value"
                            label
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                    <button className="mt-2 w-full py-2 bg-blue-600 text-white text-sm rounded shadow hover:bg-blue-700">
                        Download Assignment Results
                    </button>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow dark:border dark:border-violet-700">
                    <h3 className="font-semibold mb-2">SGPA/CGPA</h3>
                    <LineChart width={300} height={200} data={lineData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="sem" />
                        <YAxis domain={[0, 10]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="cgpa" stroke="#6366f1" strokeWidth={2} />
                    </LineChart>
                    <button className="mt-2 w-full py-2 bg-blue-600 text-white text-sm rounded shadow hover:bg-blue-700">
                        Download SGPA/CGPA
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OverallResult;
