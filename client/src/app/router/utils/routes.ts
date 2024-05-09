import {SignInPage} from "../../../pages";
import {JSX} from "react";

export type RouteType = {
    path: string;
    component: any
}

export type RoutesListType = RouteType[];

export const routes: RoutesListType = [
    {
        path: 'sign-in',
        component: SignInPage
    }
]