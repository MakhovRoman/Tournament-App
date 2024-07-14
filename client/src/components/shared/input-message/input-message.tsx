import clsx from "clsx";
import styles from "./input-message.module.scss";

export type InputMessageProps = {
	children: React.ReactNode | string | undefined;
	error?: boolean;
};

export const InputMessage = ({ children, error }: InputMessageProps) => {
	return (
		<div
			className={clsx({
				[styles.inputMessage]: true,
				[styles.errorField]: error,
			})}
		>
			{children}
		</div>
	);
};
