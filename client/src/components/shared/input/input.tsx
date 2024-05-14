import { forwardRef, HTMLInputTypeAttribute } from "react";
import clsx from 'clsx';

type InputProps = {
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    className?: string,
};

export const Input = forwardRef(function Input({
    type = "text",
    placeholder = '',
    className = '',
}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={clsx({
                [className]: className
            })}
        />
    )
})
