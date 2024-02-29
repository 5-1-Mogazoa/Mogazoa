import axios from "axios";

const instance = axios.create({
  baseURL: "https://mogazoa-api.vercel.app/2-4",
  headers: {
    "Content-type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("login");
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default instance;
