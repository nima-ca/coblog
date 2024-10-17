"use client";

import { NextUIProvider } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";
import { ReactQueryProvider } from "./reactQuery/reactQuery.provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ReactQueryProvider>
            <NextUIProvider>{children}</NextUIProvider>
        </ReactQueryProvider>
    );
};
