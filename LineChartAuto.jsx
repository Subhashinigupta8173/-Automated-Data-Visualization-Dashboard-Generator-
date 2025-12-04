import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function LineChartAuto({ data, xKey, yKey }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-3">
        {yKey} over {xKey}
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={yKey} stroke="#22C55E" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
