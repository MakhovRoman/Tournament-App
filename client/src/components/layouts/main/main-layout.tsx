import type { ReactNode } from "react";
import styles from "./main-layout.module.scss";

type MainLayoutType = {
	children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutType) => {
	return <main className={styles.mainLayout}>{children}</main>;
};
