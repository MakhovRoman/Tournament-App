import clsx from "clsx";
import type { FormEventHandler } from "react";
import styles from "./FormLayout.module.scss";

type FormLayoutProps = {
	children: React.ReactNode;
	className?: string;
	submitHandler: FormEventHandler<HTMLFormElement>;
};

export const FormLayout = ({
	children,
	className = "",
	submitHandler,
}: FormLayoutProps): JSX.Element => {
	return (
		<form
			onSubmit={submitHandler}
			className={clsx(styles.formLayout, { [className]: className })}
			id="formName"
		>
			{children}
		</form>
	);
};
