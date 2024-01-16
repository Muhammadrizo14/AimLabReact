import styles from './styles.module.scss'

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

function index({ children }: Props) {
    return (
        <div className={styles.popup}>
            <div className={styles.popup__content}>
                {children}
            </div>
        </div>
    );
}

export default index;