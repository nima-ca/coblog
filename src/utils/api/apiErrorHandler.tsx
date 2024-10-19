import { CoreAPIResponse } from "@src/types/api.types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const INTERNAL_SERVER_ERROR_MESSAGE =
    "Oops! Something broke. We're looking into it.";

export const apiErrorHandler = (
    errors: AxiosError<CoreAPIResponse<null>>,
): void => {
    const statusCode = errors.response?.status;
    const errorMessages = errors.response?.data.message;

    if (statusCode === 400) {
        if (typeof errorMessages === "string") {
            toast.error(errorMessages);
        }

        if (Array.isArray(errorMessages)) {
            errorMessages.forEach((err) => {
                toast.error(err);
            });
        }

        return;
    }

    if (statusCode === 401) {
        // TODO: Logout user
        return;
    }

    if (statusCode === 500) {
        toast.error(INTERNAL_SERVER_ERROR_MESSAGE);
        return;
    }

    if (
        statusCode === 501 ||
        statusCode === 502 ||
        statusCode === 503 ||
        statusCode === 504
    ) {
        toast.error(
            "We apologize for the inconvenience. Our team is working to resolve the issue as quickly as possible.",
        );
        return;
    }
};
