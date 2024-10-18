import { Providers } from "@src/components/provider/provider";
import type { Metadata } from "next";
import "./globals.css";

import PrimaryLayout from "@src/components/layouts/primary/primary.layout";
import { Nunito } from "next/font/google";

const nunito = Nunito({
    display: "swap",
    subsets: ["latin"],
    variable: "--font-nunito",
});

export const metadata: Metadata = {
    title: "Coblog – The Ultimate Programmer's Hub for Software Development and Tech Knowledge",
    description:
        "Coblog – Empowering Programmers Worldwide with Coding Tips, Tutorials, and In-Depth Software Development Guides. Learn, code, and stay ahead in the ever-evolving world of technology.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${nunito.className} antialiased relative min-h-svh`}
            >
                <Providers>
                    <PrimaryLayout>{children}</PrimaryLayout>
                </Providers>
            </body>
        </html>
    );
}
