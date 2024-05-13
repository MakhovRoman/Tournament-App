import { ReactNode } from "react";

type MainLayoutType = {
    children: ReactNode;
}

export const MainLayout = ({children}: MainLayoutType) => {
    return (
        <main>
            {children}
        </main>
    )
}
