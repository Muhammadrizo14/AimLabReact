import styles from './style.module.scss'
import { useState } from 'react';

function index(props: any) {
    const { targetKilled } = props
    const [position, setPosition] = useState<string[]>([])

    const changePosition = () => {
        targetKilled()
        const top = `${Math.floor(Math.random() * 90)}%`
        const left = `${Math.floor(Math.random() * (92 - 2) + 2)}%`
        setPosition([top, left])
    }

    return (
        <div className={styles.targetWrapp}>
            <div
                onClick={() => changePosition()}
                className={styles.target}
                style={{ left: `${position[1]}`, top: `${position[0]}` }}
            />
        </div>
    );
}

export default index;