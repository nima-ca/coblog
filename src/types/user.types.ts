export enum UserRole {
    Admin = "admin",
    User = "user",
}

export interface UserInfo {
    id: number;
    role: UserRole;
    name: string;
    email: string;
    lastLogin: string;
    isVerified: boolean;

    createdAt: string;
    updatedAt: string;
}

export const USER_KEY_IN_STORAGE = "user";
export const TOKEN_KEY_IN_STORAGE = "token";

export class User implements UserInfo {
    id: number;
    name: string;
    email: string;
    role: UserRole;
    lastLogin: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;

    token: string | null = null;

    constructor(user: UserInfo, token: string) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.role = user.role;
        this.lastLogin = user.lastLogin;
        this.isVerified = user.isVerified;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;

        this.token = token;
    }

    static IsStorageUndefined() {
        return typeof localStorage === "undefined";
    }

    static GetUserFromStorage(): UserInfo | null {
        if (this.IsStorageUndefined()) return null;

        const userString = localStorage.getItem(USER_KEY_IN_STORAGE);

        if (!userString) {
            return null;
        }

        try {
            return JSON.parse(userString) as UserInfo;
        } catch {
            return null;
        }
    }

    static SetUserInStorage(user: UserInfo) {
        if (!this.IsStorageUndefined()) {
            localStorage.setItem(USER_KEY_IN_STORAGE, JSON.stringify(user));
        }
    }

    static SetTokenInStorage(token: string) {
        if (!this.IsStorageUndefined()) {
            localStorage.setItem(TOKEN_KEY_IN_STORAGE, token);
        }
    }

    static GetTokenFromStorage(): string | null {
        if (this.IsStorageUndefined()) return null;

        const token = localStorage.getItem(TOKEN_KEY_IN_STORAGE);
        return token ?? null;
    }
}
