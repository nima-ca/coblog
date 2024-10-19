"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link as NextUILink } from "@nextui-org/link";
import GoogleIcon from "@src/components/icons/google.icon";
import PasswordInput from "@src/components/ui/passwordInput/passwordInput";
import authAPI from "@src/utils/api/auth/auth";
import { EMAIL_REGEX, STRONG_PASSWORD_REGEX } from "@src/utils/regex/regex";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RegisterFormData } from "../(utils)/page.types";

const RegisterForm = () => {
    const router = useRouter();
    const form = useForm<RegisterFormData>();

    const registerMutation = useMutation({
        mutationFn: authAPI.register,
        onSuccess() {
            toast.success("Your registration was successful");
            router.push("/auth/login");
        },
    });

    const submitHandler = form.handleSubmit(({ name, email, password }) => {
        registerMutation.mutate({ name, email, password });
    });

    const handleGoogleSignInClick = () => {
        router.push(process.env.NEXT_PUBLIC_API_BASE_URL + "/auth/google");
    };

    return (
        <form
            onSubmit={submitHandler}
            className="grid grid-cols-2 gap-x-10 gap-y-8 w-[40rem]"
        >
            <Input
                label="Name"
                placeholder="Name"
                labelPlacement="outside"
                isInvalid={!!form.formState.errors.name}
                errorMessage={form.formState.errors.name?.message}
                {...form.register("name", {
                    required: "Please enter your name",
                    minLength: {
                        value: 2,
                        message: "Your name should be at least two characters",
                    },
                })}
            />

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
                placeholder="Your Strong Password"
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

            <PasswordInput
                label="Confirm Password"
                labelPlacement="outside"
                placeholder="Confirm Password"
                isInvalid={!!form.formState.errors.confirmPassword}
                errorMessage={form.formState.errors.confirmPassword?.message}
                {...form.register("confirmPassword", {
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
                    validate: (value, formValues) => {
                        if (value !== formValues.password) {
                            return "The confirmation password doesn't match. Ensure both passwords are identical";
                        }

                        return;
                    },
                })}
            />

            <div className="flex flex-col col-span-2 gap-2">
                <Button
                    type="submit"
                    color="secondary"
                    className="font-bold"
                    isLoading={registerMutation.isPending}
                >
                    Register
                </Button>
                <Button
                    variant="ghost"
                    type="button"
                    color="default"
                    className="font-bold"
                    onClick={handleGoogleSignInClick}
                    startContent={<GoogleIcon className="w-5 h-5" />}
                >
                    Sign in With Google
                </Button>

                <p className="text-center text-sm dark:text-slate-300">
                    Already have an account?{" "}
                    <NextUILink
                        className="text-sm dark:text-slate-300"
                        href="/auth/login"
                        underline="always"
                        color="foreground"
                    >
                        Login here
                    </NextUILink>
                </p>
            </div>
        </form>
    );
};

export default RegisterForm;
