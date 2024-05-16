import { ChangeEvent, ChangeEventHandler, forwardRef, HTMLInputTypeAttribute, InputHTMLAttributes} from "react";
import clsx from 'clsx';
import styles from './input.module.scss';
import {UseFormSetValue} from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    labelText?: string,
    className?: string,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
    setValue?: UseFormSetValue<any>,
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        type = "text",
        labelText,
        placeholder = '',
        className = '',
        onChange,
        setValue,
        ...props
    },
    ref
) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (typeof onChange === 'function') {
            onChange(e);
        }
    }

    return (
        <div className={styles['input-wrapper']}>
            {labelText &&
                <label className={styles['input-label']}>{labelText}</label>
            }
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
        </div>
    )
})
