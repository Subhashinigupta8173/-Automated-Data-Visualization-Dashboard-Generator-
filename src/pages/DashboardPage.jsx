import React, { useState } from "react";
import FilterSidebar from "../Components/FilterSidebar";
import ChartGrid from "../Components/ChartGrid";

function DashboardPage() {
  const [filters, setFilters] = useState({});

  return (
    <div className="flex">
      <FilterSidebar onChange={(f) => setFilters(f)} />
      <div className="flex-1 p-6">
        <ChartGrid filters={filters} />
      </div>
    </div>
  );
}

export default DashboardPage;
