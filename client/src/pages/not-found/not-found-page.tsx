import { Title } from "@/components/shared/title/title";
import styles from "./not-found-page.module.scss";

const handlePostRequest = async () => {
	try {
		const response = await fetch("/api/auth/register", {
			method: "POST",
			body: JSON.stringify({
				user_name: "Lol",
				password: "kek",
				email: "roman_stv@mail.ru",
				role: "admin",
			}),
			headers: { "Content-Type": "application/json" },
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

handlePostRequest();
export const NotFoundPage = () => {
	return (
		<div className={styles.notFoundPage}>
			<Title>404</Title>
			<p>Page not found</p>
		</div>
	);
};
