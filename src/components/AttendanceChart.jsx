import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Week 1', Present: 85, Late: 10, Absent: 5 },
  { name: 'Week 2', Present: 80, Late: 15, Absent: 5 },
  { name: 'Week 3', Present: 82, Late: 10, Absent: 8 },
  { name: 'Week 4', Present: 88, Late: 7, Absent: 5 },
  { name: 'Week 5', Present: 85, Late: 10, Absent: 5 },
];

function AttendanceChart() {
  return (
    <BarChart width={400} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="Present" stackId="a" fill="#4f46e5" />
      <Bar dataKey="Late" stackId="a" fill="#facc15" />
      <Bar dataKey="Absent" stackId="a" fill="#ef4444" />
    </BarChart>
  );
}
export default AttendanceChart;