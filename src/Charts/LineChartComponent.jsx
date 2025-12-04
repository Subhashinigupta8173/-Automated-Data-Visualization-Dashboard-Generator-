import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const sample = [
  { name: "A", value: 30 },
  { name: "B", value: 80 },
  { name: "C", value: 45 },
];

function LineChartComponent() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold mb-2">Line Chart</h3>
      <LineChart width={300} height={200} data={sample}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#3b82f6" />
      </LineChart>
    </div>
  );
}

export default LineChartComponent;
