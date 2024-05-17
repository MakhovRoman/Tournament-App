import { Title } from "@/components/shared/title/title";

import { LoginForm } from "@components/login-form";

import { AuthLayout } from "@/components/layouts";
import styles from "./login-page.module.scss";

export const LoginPage = () => {
	return (
		<AuthLayout>
			<Title className={styles.loginPage__title}>LOGIN</Title>
			<LoginForm />
		</AuthLayout>
	);
};
