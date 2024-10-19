import { Button } from "@nextui-org/button";
import { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
    return (
        <div className="flex items-center justify-center flex-col py-56">
            <h1 className="text-8xl text-secondary-500 font-black mb-6">404</h1>
            <p className="text-xl font-semibold mb-1">Page Not Found</p>
            <p>Sorry, we could not find the page you are looking for.</p>

            <Button as={Link} href="/" color="secondary" className="mt-8">
                Home
            </Button>
        </div>
    );
};

export default NotFoundPage;
