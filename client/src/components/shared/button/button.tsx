import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

export enum ButtonVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant: ButtonVariants;
    disabled?: boolean;
}

export const Button = ({
    children,
    type = 'submit',
    className = '',
    variant,
    disabled = false,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={clsx(
                styles.button,
                {
                    [className]: className,
                    [styles['button__disabled']]: disabled,
                    [styles['button__primary']]: variant === ButtonVariants.PRIMARY && !disabled,
                    [styles['button__secondary']]: variant === ButtonVariants.SECONDARY
                }
            )}
            {...props}
        >
            {children}
        </button>
    )
}
