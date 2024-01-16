import styled from 'styled-components';
import styles from './style.module.scss'
import { useState } from 'react';


interface IProp {
    setTargetKilled: () => void
}

function index(props: IProp) {
    const { setTargetKilled } = props
    const [position, setPosition] = useState<string[]>([])

    const changePosition = () => {
        setTargetKilled(prev => prev + 1)
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