import { Title } from "@/components/shared/title/title";
import styles from "./not-found-page.module.scss";

const handleRequest = async () => {
	const response = await fetch("/api");
	const data = await response.json();

	console.log(data);
};

handleRequest();

export const NotFoundPage = () => {
	return (
		<div className={styles.notFoundPage}>
			<Title>404</Title>
			<p>Page not found</p>
		</div>
	);
};
