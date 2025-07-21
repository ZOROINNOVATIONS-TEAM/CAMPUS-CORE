import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TotalUsersCard = ({ studentCount = 2847, facultyCount = 122, chartData }) => {
  const dummyChart = chartData || [
    { month: "Jan", users: 500 },
    { month: "Feb", users: 800 },
    { month: "Mar", users: 1200 },
    { month: "Apr", users: 1500 },
    { month: "May", users: 2000 },
    { month: "Jun", users: 2800 },
  ];

  return (
    <div className="px-4 sm:px-6">
		<div className="bg-white p-4 rounded-xl shadow-md">
			<h3 className="font-semibold mb-2">Total Users</h3>
			<div className="flex justify-between mb-2 text-sm">
				<p className="text-blue-600">Students: {studentCount}</p>
				<p className="text-green-600">Faculty: {facultyCount}</p>
			</div>
			<ResponsiveContainer width="100%" height={100}>
				<LineChart data={dummyChart}>
				<XAxis dataKey="month" hide />
				<YAxis hide />
				<Tooltip />
				<Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={2} dot={false} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	</div>
  );
};

export default TotalUsersCard;
