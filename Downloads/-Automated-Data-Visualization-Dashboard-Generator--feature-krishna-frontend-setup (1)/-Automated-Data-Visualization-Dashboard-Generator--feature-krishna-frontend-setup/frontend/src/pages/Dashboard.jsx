import { useState } from "react";
import FileUpload from "../components/FileUpload";
import AutoChart from "../charts/AutoChart";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [columnTypes, setColumnTypes] = useState(null);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleSendToBackend = async () => {
    if (!file) return alert("Upload a file first!");

    const formData = new FormData();
    formData.append("datafile", file);

    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    console.log("Backend Response:", result);

    setChartData(result.data);
    setColumnTypes(result.types);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <FileUpload onFileSelect={handleFileSelect} />

      {file && (
        <button
          onClick={handleSendToBackend}
          className="mt-5 px-5 py-3 bg-blue-600 text-white rounded-lg"
        >
          Generate Dashboard
        </button>
      )}

      {chartData && columnTypes && (
        <div className="mt-10">
          <AutoChart data={chartData} columnTypes={columnTypes} />
        </div>
      )}
    </div>
  );
}
