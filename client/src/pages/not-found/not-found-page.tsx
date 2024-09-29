import { Title } from "@/components/shared/title/title";
import styles from "./not-found-page.module.scss";

const handleRequest = async () => {
	const response = await fetch("/api");
	const data = await response.json();

	console.log(data);
};

const handlePostRequest = async () => {
	try {
		const response = await fetch("/api/auth/login", {
			method: "POST",
			body: JSON.stringify({}),
			headers: { "Content-Type": "application/json" },
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

handleRequest();
handlePostRequest();
export const NotFoundPage = () => {
	return (
		<div className={styles.notFoundPage}>
			<Title>404</Title>
			<p>Page not found</p>
		</div>
	);
};
