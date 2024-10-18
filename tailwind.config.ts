import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ["var(--font-nunito)"],
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    layout: {}, // light theme layout tokens
                    colors: {}, // light theme colors
                },
                dark: {
                    layout: {}, // dark theme layout tokens
                    colors: {
                        background: "#181A2A",
                    }, // dark theme colors
                },
                // ... custom themes
            },
        }),
    ],
};
export default config;
