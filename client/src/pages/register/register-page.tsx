import { RegisterForm } from "@/components/forms/register-form";
import { AuthLayout } from "@/components/layouts";
import { Title } from "@/components/shared/title/title";
import styles from "./register-page.module.scss";

export const RegisterPage = () => {
	return (
		<AuthLayout>
			<Title className={styles.registerPage__title}>REGISTER</Title>
			<RegisterForm />
		</AuthLayout>
	);
};
