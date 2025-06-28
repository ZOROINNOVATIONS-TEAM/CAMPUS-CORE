import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,
  LineChart, Line, XAxis, YAxis, CartesianGrid
} from 'recharts';

const pieColors = ["#36EB6B", "#FF6384", "#FFCE56", "#36A2EB"];

export default function Chart({ type, data, labels }) {
  if (type === "pie") {
    return (
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
  if (type === "line") {
    const chartData = labels.map((label, i) => ({
      semester: label,
      value: data[i]
    }));
    return (
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semester" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={4} dot={{ r: 5, fill: "#6366f1" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  return null;
}


