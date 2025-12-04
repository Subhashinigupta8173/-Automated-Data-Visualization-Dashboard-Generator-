import { useState } from "react";

export default function FileUpload({ onFileSelect }) {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    if (!validTypes.includes(file.type)) {
      alert("Please upload only CSV or Excel files.");
      return;
    }

    setFileName(file.name);
    if (onFileSelect) onFileSelect(file);
  };

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Upload Your Dataset
      </h2>

      <label
        htmlFor="fileInput"
        className="
          w-96 h-40 flex flex-col items-center justify-center border-2 border-dashed 
          border-gray-400 rounded-xl cursor-pointer hover:bg-gray-100 transition
        "
      >
        <span className="text-gray-600">Click to select a file</span>
        <span className="text-sm text-gray-400 mt-2">(CSV or Excel)</span>
      </label>

      <input
        id="fileInput"
        type="file"
        accept=".csv, .xlsx"
        className="hidden"
        onChange={handleFileChange}
      />

      {fileName && (
        <p className="mt-4 text-green-600 font-medium">
          Selected File: {fileName}
        </p>
      )}
    </div>
  );
}
