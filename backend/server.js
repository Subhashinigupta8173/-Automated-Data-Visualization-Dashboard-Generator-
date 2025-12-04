const express = require("express");
const cors = require("cors");
const analyzeRoutes = require("./routes/analyzeRoutes");
const visualizeRoutes = require("./routes/visualizeRoutes");
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/analyze", analyzeRoutes);
app.use("/api/visualize", visualizeRoutes);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
