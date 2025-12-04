import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const sample = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 200 },
];

function PieChartComponent() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold mb-2">Pie Chart</h3>
      <PieChart width={300} height={200}>
        <Pie
          data={sample}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#6366f1"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default PieChartComponent;
