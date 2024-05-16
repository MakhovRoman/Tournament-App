import styles from './input-message.module.scss';
import clsx from 'clsx';

type InputMessageProps = {
    children: React.ReactNode,
    error?: boolean
}

export const InputMessage = ({children, error}: InputMessageProps) => {
    return (
        <div className={clsx({
            [styles.inputMessage]: true,
            [styles.errorField]: error
        })}>
            {children}
        </div>
    )
}
