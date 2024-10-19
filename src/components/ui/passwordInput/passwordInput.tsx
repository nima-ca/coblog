import { Input, InputProps } from "@nextui-org/input";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { forwardRef } from "react";
import { useToggle } from "usehooks-ts";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const [isVisible, _, setValue] = useToggle(false);

    const toggleVisibility = () => setValue((pervState) => !pervState);

    return (
        <Input
            {...props}
            ref={ref}
            type={isVisible ? "text" : "password"}
            endContent={
                <button
                    type="button"
                    onClick={toggleVisibility}
                    className="focus:outline-primary-500"
                    aria-label="toggle password visibility"
                >
                    {isVisible ? (
                        <IconEyeOff className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                        <IconEye className="text-2xl text-default-400 pointer-events-none" />
                    )}
                </button>
            }
        />
    );
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
