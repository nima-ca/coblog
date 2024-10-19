"use client";

import { useTheme } from "next-themes";
import { FC, PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
    const { theme } = useTheme();

    return (
        <>
            {children}

            <ToastContainer
                theme={theme}
                hideProgressBar
                position="top-center"
                autoClose={5000} // auto close after 5s
            />
        </>
    );
};

export default ToastProvider;
