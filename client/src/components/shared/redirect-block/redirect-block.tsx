import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import styles from "./redirect-block.module.scss";

type RedirectBlockProps = {
	description: string;
	linkText: string;
	href: string;
	className?: string;
};

export const RedirectBlock = ({
	description,
	linkText,
	href,
	className = "",
}: RedirectBlockProps) => {
	return (
		<div className={clsx(styles.redirect, { [className]: className })}>
			<p className={styles.redirect__description}>
				{description}
				&nbsp;
			</p>
			<Link to={href} className={styles.redirect__link}>
				{linkText}
			</Link>
		</div>
	);
};
