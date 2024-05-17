import styles from "./auth-layout.module.scss";

type AuthLayoutType = {
	children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutType) => {
	return <section className={styles.authLayout}>{children}</section>;
};
