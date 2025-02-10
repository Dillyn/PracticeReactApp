import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:44383",
  headers: {
    "Content-Type": "application/json",
  },
});
