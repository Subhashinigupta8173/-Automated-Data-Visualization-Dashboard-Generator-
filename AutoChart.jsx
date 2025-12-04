import BarChartAuto from "./BarChartAuto";
import LineChartAuto from "./LineChartAuto";
import PieChartAuto from "./PieChartAuto";

export default function AutoChart({ columnTypes, data }) {
  const keys = Object.keys(columnTypes);

  // Identify columns
  const numericCols = keys.filter((k) => columnTypes[k] === "numeric");
  const categoricalCols = keys.filter((k) => columnTypes[k] === "categorical");
  const dateCols = keys.filter((k) => columnTypes[k] === "date");

  // Logic: numeric + date → Line
  if (numericCols.length > 0 && dateCols.length > 0) {
    return (
      <LineChartAuto
        data={data}
        xKey={dateCols[0]}
        yKey={numericCols[0]}
      />
    );
  }

  // numeric + category → Bar Chart
  if (numericCols.length > 0 && categoricalCols.length > 0) {
    return (
      <BarChartAuto
        data={data}
        xKey={categoricalCols[0]}
        yKey={numericCols[0]}
      />
    );
  }

  // Only categorical → Pie
  if (categoricalCols.length > 0 && numericCols.length === 0) {
    return <PieChartAuto data={data} categoryKey={categoricalCols[0]} />;
  }

  // fallback
  return <p>No suitable chart could be auto-generated.</p>;
}
