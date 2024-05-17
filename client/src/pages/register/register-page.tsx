import { Title } from "@/components/shared/title/title";

import { AuthLayout } from "@/components/layouts";
import { RegisterForm } from "@/components/register-form";
import styles from "./register-page.module.scss";

export const RegisterPage = () => {
	return (
		<AuthLayout>
			<Title className={styles.registerPage__title}>REGISTER</Title>
			<RegisterForm />
		</AuthLayout>
	);
};
