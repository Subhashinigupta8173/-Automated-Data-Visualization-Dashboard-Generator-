import React from "react";
import LineChartComponent from "../Charts/LineChartComponent";
import BarChartComponent from "../Charts/BarChartComponent";
import PieChartComponent from "../Charts/PieChartComponent";
import KPICard from "../Charts/KPICard";

function ChartGrid({ filters }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <KPICard />
      <LineChartComponent />
      <BarChartComponent />
      <PieChartComponent />
    </div>
  );
}

export default ChartGrid;
