import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-food-explorer-hgs3.onrender.com"
})

