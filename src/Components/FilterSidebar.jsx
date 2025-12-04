import React, { useState } from "react";

function FilterSidebar({ onChange }) {
  const [filters, setFilters] = useState({});

  const applyFilters = () => {
    onChange(filters);
  };

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Add your filter UI here */}
      <p className="text-gray-500">Filter controls will go here...</p>

      <button
        onClick={applyFilters}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default FilterSidebar;
