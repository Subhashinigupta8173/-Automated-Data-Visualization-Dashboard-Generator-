import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "database", "data.json");

export const loadLocalData = () => {
  const raw = fs.readFileSync(filePath);
  return JSON.parse(raw);
};
