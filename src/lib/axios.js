import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});