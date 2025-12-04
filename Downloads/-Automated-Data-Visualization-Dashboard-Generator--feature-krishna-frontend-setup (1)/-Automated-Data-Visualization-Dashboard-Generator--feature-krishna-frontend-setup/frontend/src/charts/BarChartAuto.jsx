import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function BarChartAuto({ data, xKey, yKey }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-3">
        {xKey} vs {yKey}
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={yKey} fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
