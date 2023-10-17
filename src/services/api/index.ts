import axios from "axios";

export const ApiService = axios.create({
  baseURL: process.env.API_TOPMED,
});

export default ApiService;
