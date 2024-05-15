import {ChangeEvent, ChangeEventHandler, forwardRef, HTMLInputTypeAttribute} from "react";
import clsx from 'clsx';
import styles from './input.module.scss';
import {UseFormSetValue} from "react-hook-form";

type InputProps = {
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    className?: string,
    onChange?: ChangeEvent<HTMLInputElement> | undefined,
    setValue?: UseFormSetValue<any>,
};

export const Input = forwardRef<HTMLInputTypeAttribute, InputProps>(function Input({
    type = "text",
    placeholder = '',
    className = '',
    onChange,
    setValue,
    ...props
}: InputProps) {
    const handleChange = (e: ChangeEventHandler<HTMLInputElement>) => {
        if (typeof onChange === 'function') {
            onChange(e);
        }
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={clsx({
                [className]: className,
                [styles.input]: true
            })}
            onChange={handleChange}
            {...props}
        />
    )
})
