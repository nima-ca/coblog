"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link as NextUILink } from "@nextui-org/link";
import GoogleSignIn from "@src/components/googleSignIn/googleSignIn";
import PasswordInput from "@src/components/ui/passwordInput/passwordInput";
import { User } from "@src/types/user.types";
import authAPI from "@src/utils/api/auth/auth";
import { EMAIL_REGEX, STRONG_PASSWORD_REGEX } from "@src/utils/regex/regex";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LoginFormData } from "../(utils)/page.types";

const LoginForm = () => {
    const router = useRouter();
    const form = useForm<LoginFormData>();

    const loginMutation = useMutation({
        mutationFn: authAPI.login,
        onSuccess({ data }) {
            // Save user & token in storage
            User.SetUserInStorage(data.user);
            User.SetTokenInStorage(data.token);

            toast.success("Your login was successful");
            router.push("/");
        },
    });

    const submitHandler = form.handleSubmit(({ email, password }) => {
        loginMutation.mutate({ email, password });
    });

    return (
        <form
            onSubmit={submitHandler}
            className="grid grid-cols-1 gap-x-10 gap-y-8 w-[40rem]"
        >
            <Input
                label="Email"
                labelPlacement="outside"
                placeholder="email@example.com"
                isInvalid={!!form.formState.errors.email}
                errorMessage={form.formState.errors.email?.message}
                {...form.register("email", {
                    required: "Please enter your email",
                    pattern: {
                        value: EMAIL_REGEX,
                        message: "Please enter a valid email address",
                    },
                })}
            />

            <PasswordInput
                label="Password"
                labelPlacement="outside"
                placeholder="Password"
                isInvalid={!!form.formState.errors.password}
                errorMessage={form.formState.errors.password?.message}
                {...form.register("password", {
                    required: "Please enter your password",
                    minLength: {
                        message: "Your password must be more than 8 characters",
                        value: 8,
                    },
                    maxLength: {
                        message:
                            "Your password must be less than 128 characters",
                        value: 128,
                    },
                    pattern: {
                        value: STRONG_PASSWORD_REGEX,
                        message:
                            "Your Password must contain at least a number and a special character (!@#$%^&*)",
                    },
                })}
            />

            <div className="flex flex-col gap-2">
                <Button
                    type="submit"
                    color="secondary"
                    className="font-bold"
                    isLoading={loginMutation.isPending}
                >
                    Login
                </Button>

                <GoogleSignIn />

                <p className="text-center text-sm dark:text-slate-300">
                    Forgot your password?{" "}
                    <NextUILink
                        className="text-sm dark:text-slate-300"
                        href="/auth/login"
                        underline="always"
                        color="foreground"
                    >
                        Reset here
                    </NextUILink>
                </p>

                <p className="text-center text-sm dark:text-slate-300">
                    Don’t have an account?{" "}
                    <NextUILink
                        className="text-sm dark:text-slate-300"
                        href="/auth/login"
                        underline="always"
                        color="foreground"
                    >
                        Sign up now
                    </NextUILink>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;
