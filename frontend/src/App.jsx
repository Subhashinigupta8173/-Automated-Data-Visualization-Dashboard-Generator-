import FileUpload from "./FileUpload";
import Dashboard from "./Dashboard";
import { useState } from "react";

function App() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div>
      {!uploaded ? (
        <FileUpload onUploadSuccess={() => setUploaded(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
