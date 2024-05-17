import clsx from "clsx";
import {
	type ChangeEvent,
	type ChangeEventHandler,
	type HTMLInputTypeAttribute,
	type InputHTMLAttributes,
	forwardRef,
} from "react";
import type { UseFormSetValue } from "react-hook-form";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
	labelText?: string;
	className?: string;
	onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
	setValue?: UseFormSetValue<Record<string, unknown>>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ type = "text", labelText, placeholder = "", className = "", onChange, setValue, ...props },
	ref,
) {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (typeof onChange === "function") {
			onChange(e);
		}
	};

	return (
		<div className={styles["input-wrapper"]}>
			{labelText && <label className={styles["input-label"]}>{labelText}</label>}
			<input
				type={type}
				placeholder={placeholder}
				className={clsx({
					[className]: className,
					[styles.input]: true,
				})}
				onChange={handleChange}
				{...props}
			/>
		</div>
	);
});
