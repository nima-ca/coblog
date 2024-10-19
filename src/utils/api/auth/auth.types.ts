import { UserInfo } from "@src/types/user.types";

export interface LoginAPIBody {
    email: string;
    password: string;
}

export interface LoginAPIResponse {
    user: UserInfo;
    token: string;
}

export interface RegisterAPIBody extends LoginAPIBody {
    name: string;
}
