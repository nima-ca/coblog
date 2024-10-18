"use client";

import { Switch } from "@nextui-org/react";
import { ThemeOptions } from "@src/types/theme.types";
import { IconMoon, IconSun } from "@tabler/icons-react";
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
        <Switch
            isSelected={theme === ThemeOptions.Dark}
            size="md"
            color="secondary"
            onChange={() => {
                setTheme(() => {
                    return theme === ThemeOptions.Dark
                        ? ThemeOptions.Light
                        : ThemeOptions.Dark;
                });
            }}
            thumbIcon={({ className }) =>
                theme === ThemeOptions.Light ? (
                    <IconSun className={className} />
                ) : (
                    <IconMoon className={className} />
                )
            }
        />
    );
};

export default ThemeSwitcher;
