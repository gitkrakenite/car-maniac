import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000/api/v1",
  baseURL: "https://car-maniac-backend.vercel.app/api/v1",
});

export default instance;
