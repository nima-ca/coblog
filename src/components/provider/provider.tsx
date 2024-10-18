"use client";

import { NextUIProvider } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";
import { ReactQueryProvider } from "./reactQuery/reactQuery.provider";
import ThemeProvider from "./theme/theme.provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ReactQueryProvider>
            <NextUIProvider>
                <ThemeProvider>{children}</ThemeProvider>
            </NextUIProvider>
        </ReactQueryProvider>
    );
};
