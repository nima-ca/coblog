import { User } from "@src/types/user.types";
import axios from "axios";
import { apiErrorHandler } from "./apiErrorHandler";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;
const apiService = axios.create({ baseURL: BASE_URL });

apiService.interceptors.request.use(
    (config) => {
        const token = User.GetTokenFromStorage();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

apiService.interceptors.response.use(
    (config) => config,
    (error) => {
        apiErrorHandler(error);
        return Promise.reject(error);
    },
);

export default apiService;
