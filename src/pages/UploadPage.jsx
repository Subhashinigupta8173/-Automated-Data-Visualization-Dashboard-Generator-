import React, { useState } from "react";
import FileUpload from "../Components/FileUpload";

function UploadPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload your dataset</h1>
      <FileUpload />
    </div>
  );
}

export default UploadPage;
