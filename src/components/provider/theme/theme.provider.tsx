import { ThemeOptions } from "@src/types/theme.types";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme={ThemeOptions.Dark}
            themes={[ThemeOptions.Dark, ThemeOptions.Light]}
        >
            {children}
        </NextThemesProvider>
    );
};

export default ThemeProvider;
