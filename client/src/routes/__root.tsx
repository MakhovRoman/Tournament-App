
import { MainLayout } from "@/components/layouts/main";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<MainLayout>
				<Outlet />
			</MainLayout>
			<TanStackRouterDevtools />
		</>
	),
});
