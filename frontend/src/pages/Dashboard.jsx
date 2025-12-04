import { useState } from "react";
import FileUpload from "../components/FileUpload";

export default function Dashboard() {
  const [file, setFile] = useState(null);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleSendToBackend = async () => {
    if (!file) {
      alert("Please upload a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("datafile", file);

    console.log("File ready to send:", file.name);
    alert("File prepared for backend upload (backend will be added later).");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <FileUpload onFileSelect={handleFileSelect} />

      {file && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSendToBackend}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
          >
            Upload to Backend
          </button>
        </div>
      )}
    </div>
  );
}
