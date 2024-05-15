import { Title } from "@/components/shared/title/title";
import { AuthLayout } from "@components/auth-layout";
import {LoginForm} from "@components/login-form";

export const LoginPage = () => {
    return (
        <AuthLayout>
            <Title>LOGIN</Title>
            <LoginForm />
        </AuthLayout>
    );
};
