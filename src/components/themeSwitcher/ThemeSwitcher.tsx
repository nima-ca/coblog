"use client";

import { Button } from "@nextui-org/button";
import { ThemeOptions } from "@src/types/theme.types";
import { useTheme } from "next-themes";
import { FC, useEffect } from "react";
import { useToggle } from "usehooks-ts";

const ThemeSwitcher: FC = () => {
    const { setTheme, theme } = useTheme();
    const [isMounted, _, setMountValue] = useToggle(false);

    useEffect(() => {
        setMountValue(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <div>Current Theme: {theme}</div>

            <div className="flex items-center gap-10">
                <Button onClick={() => setTheme(ThemeOptions.Dark)}>
                    Dark
                </Button>
                <Button onClick={() => setTheme(ThemeOptions.Light)}>
                    Light
                </Button>
            </div>
        </>
    );
};

export default ThemeSwitcher;
