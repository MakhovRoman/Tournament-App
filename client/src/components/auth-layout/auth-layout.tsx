type AuthComponentType = {
    children: React.ReactNode
}

export const AuthComponent = ({children}: AuthComponentType) => {
    return (
        <section>
            {children}
        </section>
    )
}
