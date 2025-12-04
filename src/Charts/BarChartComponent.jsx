import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const sample = [
  { name: "A", value: 50 },
  { name: "B", value: 20 },
  { name: "C", value: 90 },
];

function BarChartComponent() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold mb-2">Bar Chart</h3>
      <BarChart width={300} height={200} data={sample}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#10b981" />
      </BarChart>
    </div>
  );
}

export default BarChartComponent;
