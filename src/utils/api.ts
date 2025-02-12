import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:44383",
  headers: {
    "X-Api-Key": "ff59f4d564f54d578ba4F133d883a776",
    "Content-Type": "application/json",
  },
});
