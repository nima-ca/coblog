import { Button, Input } from "@nextui-org/react";
import { IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { FC } from "react";

const PrimaryLayoutFooter: FC = () => {
    return (
        <footer className="flex items-center justify-center bg-gray-100 dark:bg-[#141624] pt-16 pb-8 mt-auto w-full">
            <div className="max-w-[75rem] w-full mx-auto">
                <div className="grid grid-cols-3">
                    <div className="flex flex-col gap-2 max-w-72">
                        <h5 className="text-lg font-semibold mb-1">About</h5>

                        <p className="text-gray-500 text-justify">
                            Welcome to Coblog, a blog dedicated to programmers
                            who are passionate about coding, learning, and
                            growth. Here, we explore the world of softwares with
                            a focus on practical tips, in-depth tutorials, and
                            the latest tech trends.
                        </p>

                        <p>
                            Email:
                            <Link
                                href="mailto:info@coblog.com"
                                className="mx-1 text-gray-500"
                            >
                                info@coblog.com
                            </Link>
                        </p>
                    </div>
                    <div className="flex items-start gap-20">
                        <div className="flex flex-col gap-2">
                            <h5 className="text-lg font-semibold mb-1">
                                Links
                            </h5>

                            <Link className="text-slate-600" href="/">
                                Home
                            </Link>
                            <Link className="text-slate-600" href="/">
                                Articles
                            </Link>
                            <Link className="text-slate-600" href="/">
                                Contact Us
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="text-lg font-semibold mb-1">
                                Categories
                            </h5>

                            <Link className="text-slate-600" href="/">
                                Front-End
                            </Link>
                            <Link className="text-slate-600" href="/">
                                Back-End
                            </Link>
                            <Link className="text-slate-600" href="/">
                                Devops
                            </Link>
                            <Link className="text-slate-600" href="/">
                                Algorithms
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-[#242535] p-9 flex flex-col gap-7 rounded-xl">
                        <div className="flex flex-col gap-2">
                            <h5 className="text-center text-xl font-bold">
                                Weekly Newsletter
                            </h5>
                            <p className="text-center text-gray-500">
                                Get blog articles & posts via email
                            </p>
                        </div>

                        <form className="flex flex-col gap-2">
                            <Input
                                placeholder="Your Email"
                                endContent={<IconMail />}
                            />

                            <Button type="submit" color="secondary">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-300 dark:border-slate-700 pt-8 mt-16 flex items-center justify-between">
                    <Link className="font-black text-2xl" href="/">
                        Coblog
                    </Link>

                    <div className="flex items-center gap-4 text-slate-500">
                        <Link href="/">Terms of Use</Link> |
                        <Link href="/">Privacy Policy</Link> |
                        <Link href="/">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PrimaryLayoutFooter;
