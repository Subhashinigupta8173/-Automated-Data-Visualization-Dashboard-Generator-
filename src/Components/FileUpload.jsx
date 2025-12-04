import React, { useState } from "react";
import api from "../utils/api";

function FileUpload() {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    await api.post("/upload", formData);
    alert("File uploaded!");
  };

  return (
    <div className="border p-6 rounded-lg bg-white shadow-md w-full max-w-lg">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={uploadFile}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}

export default FileUpload;
