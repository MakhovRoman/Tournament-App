import { NotFoundPage } from "@/pages/not-found";
import { routeTree } from "@/routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";

const router = createRouter({
	routeTree,
	defaultNotFoundComponent: () => <NotFoundPage />,
});

export const App = () => {
	return <RouterProvider router={router} />;
};
