import axios, { AxiosError, AxiosInstance } from "axios";

// import { isTokenExpired } from "../utils";
import config from "../config";
// import { redirect } from "react-router-dom";

export const api: AxiosInstance = axios.create({
  baseURL: config.BASE_URL,
});

// api.defaults.headers.post["Content-Type"] = "application/json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
api.interceptors.request.use((config: any) => {
  if (config.headers === undefined) {
    config.headers = {};
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalRequest: any = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      return Promise.reject(error);
    }
  }
);
