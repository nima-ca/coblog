export interface CoreAPIResponse<T = null> {
    data: T;
    message: string | string[] | null | undefined;
}
