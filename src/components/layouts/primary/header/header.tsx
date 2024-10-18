import { Button } from "@nextui-org/button";
import { Link as NextUILink } from "@nextui-org/link";
import ThemeSwitcher from "@src/components/themeSwitcher/ThemeSwitcher";
import Link from "next/link";

import { FC } from "react";

const PrimaryLayoutHeader: FC = () => {
    return (
        <header className="flex items-center justify-center">
            <nav className="max-w-[75rem] w-full mx-auto flex items-center justify-between my-5">
                <Link className="font-black text-3xl" href="/">
                    Coblog
                </Link>

                <div className="flex items-center gap-3">
                    <NextUILink
                        href="/"
                        underline="hover"
                        color="foreground"
                        className="font-medium"
                    >
                        Home
                    </NextUILink>
                    <NextUILink
                        href="/"
                        underline="hover"
                        color="foreground"
                        className="font-medium"
                    >
                        Articles
                    </NextUILink>
                    <div className="mx-8 flex items-center gap-3">
                        <Button
                            as={Link}
                            color="secondary"
                            href="/auth/login"
                            className="font-bold"
                        >
                            Login
                        </Button>
                        <Button
                            as={Link}
                            color="secondary"
                            href="/auth/register"
                            className="font-bold"
                        >
                            Register
                        </Button>
                    </div>

                    <div className="min-w-14 flex items-center">
                        <ThemeSwitcher />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default PrimaryLayoutHeader;
