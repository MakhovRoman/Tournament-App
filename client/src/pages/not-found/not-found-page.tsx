import { Title } from "@/components/shared/title/title";
import styles from "./not-found-page.module.scss";

// const handlePostRequest = async () => {
// 	try {
// 		const response = await fetch("/api/auth/register", {
// 			method: "POST",
// 			body: JSON.stringify({
// 				user_name: "Lol",
// 				password: "kek",
// 				email: "roman_stv@mail.ru",
// 				role: "admin",
// 			}),
// 			headers: { "Content-Type": "application/json" },
// 		});
// 		const data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// const loginRequest = async () => {
// 	try {
// 		const response = await fetch("/api/v1/auth/login", {
// 			method: "POST",
// 			body: JSON.stringify({
// 				identity: "roman_stv@mail.ru",
// 				password: "kek",
// 			}),
// 			headers: { "Content-Type": "application/json" },
// 		});
// 		console.log(response);
// 		const { data } = await response.json();
// 		localStorage.setItem("token", data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

// // handlePostRequest();
// loginRequest();
export const NotFoundPage = () => {
	return (
		<div className={styles.notFoundPage}>
			<Title>404</Title>
			<p>Page not found</p>
		</div>
	);
};
