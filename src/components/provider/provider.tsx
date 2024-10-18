"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import { ReactQueryProvider } from "./reactQuery/reactQuery.provider";
import ThemeProvider from "./theme/theme.provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter();

    return (
        <ReactQueryProvider>
            <NextUIProvider navigate={router.push}>
                <ThemeProvider>{children}</ThemeProvider>
            </NextUIProvider>
        </ReactQueryProvider>
    );
};
