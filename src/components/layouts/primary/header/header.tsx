import { Button } from "@nextui-org/button";
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
                    <Link className="font-medium" href="/">
                        Home
                    </Link>
                    <Link className="font-medium" href="/">
                        Posts
                    </Link>
                    <div className="mx-8 flex items-center gap-3">
                        <Button className="font-bold" color="secondary">
                            Login
                        </Button>
                        <Button className="font-bold" color="secondary">
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
