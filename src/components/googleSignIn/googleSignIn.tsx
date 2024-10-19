"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import GoogleIcon from "../icons/google.icon";

const GoogleSignIn = () => {
    const router = useRouter();

    const clickHandler = () => {
        router.push(process.env.NEXT_PUBLIC_API_BASE_URL + "/auth/google");
    };

    return (
        <Button
            variant="ghost"
            type="button"
            color="default"
            className="font-bold"
            onClick={clickHandler}
            startContent={<GoogleIcon className="w-5 h-5" />}
        >
            Sign in With Google
        </Button>
    );
};

export default GoogleSignIn;
