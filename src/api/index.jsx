import axios from "axios";

const baseURL = "https://machines-data.vercel.app";

const api = axios.create({
  baseURL,
});

export default api;
