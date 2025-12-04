import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];
    validateFile(droppedFile);
  };

  const validateFile = (uploadedFile) =>  
  {
    if (!uploadedFile) return;

    const allowedTypes = ["text/csv", 
                          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];

    if (!allowedTypes.includes(uploadedFile.type)) {
      setError("Only CSV or Excel (.xlsx) files allowed.");
      return;
    }

    setFile(uploadedFile);
    setError("");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    validateFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      setError("Please select a file first.");
      return;
    }

    alert("Upload API will be connected here.");
  };

  return (
    <div className="flex flex-col items-center mt-10 px-5">
      <h2 className="text-2xl font-semibold mb-4">Upload Your Data File</h2>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`w-full max-w-lg p-10 rounded-xl border-2 
        ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"} 
        border-dashed text-center transition`}
      >
        <p className="text-gray-600">
          Drag & Drop your CSV / Excel file here
        </p>
        <p className="text-sm text-gray-400 mt-2">or</p>

        <label className="mt-4 inline-block text-white bg-blue-600 px-5 py-2 rounded-lg cursor-pointer">
          Choose File
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>

      {file && (
        <p className="mt-4 text-green-600 font-medium">
          Selected File: {file.name}
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-600 font-medium">{error}</p>
      )}

      <button
        onClick={handleUpload}
        className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg text-white"
      >
        Upload File
      </button>
    </div>
  );
}
