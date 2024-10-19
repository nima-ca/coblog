export interface LoginAPIBody {
    email: string;
    password: string;
}

export interface LoginAPIResponse {
    user: unknown;
    token: string;
}

export interface RegisterAPIBody extends LoginAPIBody {
    name: string;
}
