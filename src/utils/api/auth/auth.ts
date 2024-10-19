import { CoreAPIResponse } from "@src/types/api.types";
import apiService from "../api";
import { LoginAPIBody, LoginAPIResponse, RegisterAPIBody } from "./auth.types";

class AuthAPI {
    async login(body: LoginAPIBody) {
        const response = await apiService.post<
            CoreAPIResponse<LoginAPIResponse>
        >("/auth/login", body);

        return response.data;
    }

    async register(body: RegisterAPIBody) {
        const response = await apiService.post<CoreAPIResponse>(
            "/auth/register",
            body,
        );

        return response.data;
    }
}

const authAPI = new AuthAPI();
export default authAPI;
