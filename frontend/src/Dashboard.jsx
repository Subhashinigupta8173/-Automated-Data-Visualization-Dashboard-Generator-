import React from "react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Category</label>
            <select className="w-full p-2 border rounded">
              <option>Select Category</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Date Range</label>
            <input type="date" className="w-full p-2 border rounded mb-2" />
            <input type="date" className="w-full p-2 border rounded" />
          </div>

          <button className="bg-blue-600 text-white py-2 rounded w-full">
            Apply Filters
          </button>
        </div>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Chart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Chart Card */}
          <div className="bg-white shadow rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Chart 1 Placeholder</p>
          </div>

          {/* Chart Card */}
          <div className="bg-white shadow rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Chart 2 Placeholder</p>
          </div>

          {/* Chart Card */}
          <div className="bg-white shadow rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Chart 3 Placeholder</p>
          </div>

          {/* Chart Card */}
          <div className="bg-white shadow rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Chart 4 Placeholder</p>
          </div>

        </div>
      </main>
    </div>
  );
}
