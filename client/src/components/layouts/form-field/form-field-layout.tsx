import clsx from "clsx";
import styles from "./form-field-layout.module.scss";

type FormFieldLayoutProps = {
	children: React.ReactNode;
	className?: string;
};

export const FormFieldLayout = ({ children, className = "" }: FormFieldLayoutProps) => {
	return (
		<div className={clsx(styles.formFieldLayout, { [className]: className })}>
			{children}
		</div>
	);
};
