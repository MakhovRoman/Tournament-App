import clsx from "clsx";
import type { FormEventHandler } from "react";
import { SubmitErrorHandler, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import styles from "./FormLayout.module.scss";

type FormLayoutProps = {
	children: React.ReactNode;
	className?: string;
	submitHandler: FormEventHandler<HTMLFormElement>;
};

export const FormLayout = ({ children, className = "", submitHandler }: FormLayoutProps) => {
	return (
		<form onSubmit={submitHandler} className={clsx(styles.formLayout, { [className]: className })}>
			{children}
		</form>
	);
};
