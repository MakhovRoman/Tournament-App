import { RegisterPage } from "@/pages/register";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/registration")({
	component: RegisterPage,
});
