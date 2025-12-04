import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // change according to backend
});

export default api;
