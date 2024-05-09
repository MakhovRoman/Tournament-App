import {RoutesListType} from "./routes.ts";
import {createRoute} from "@tanstack/react-router";
import {rootRoute} from "./createRootRoute.tsx";

export const createRoutesList = (list: RoutesListType) => {
    const routes = list.map(route => (
        createRoute({
            getParentRoute: () => rootRoute,
            path: '/' + route.path,
            component: route.component,
        })
    ))
}