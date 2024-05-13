import styles from "./auth-layout.module.scss";

type AuthComponentType = {
    children: React.ReactNode
}

export const AuthComponent = ({children}: AuthComponentType) => {
    return (
        <section className={styles.authLayout}>
            {children}
        </section>
    )
}
