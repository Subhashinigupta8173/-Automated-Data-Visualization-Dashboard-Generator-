import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

export default function PieChartAuto({ data, categoryKey }) {
  const counts = {};

  data.forEach((row) => {
    counts[row[categoryKey]] = (counts[row[categoryKey]] || 0) + 1;
  });

  const formattedData = Object.keys(counts).map((key) => ({
    name: key,
    value: counts[key],
  }));

  const COLORS = ["#6366F1", "#22C55E", "#EC4899", "#F59E0B", "#0EA5E9"];

  return (
    <div className="p-5 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-3">Distribution of {categoryKey}</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Tooltip />
          <Pie data={formattedData} dataKey="value" nameKey="name" outerRadius={120}>
            {formattedData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
