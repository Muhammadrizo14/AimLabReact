import styles from './style.module.scss'
import { useState } from 'react';
import KilledSound from '../../assets/saunds/killed.mp3'
import useSound from 'use-sound';
import styled, { keyframes } from 'styled-components';


interface TargetProps {
    left?: any;
    top?: any;
}


const Target = styled("div")<TargetProps>((props) => ({
    "@keyframes movement": {
        "0%": {
            left: props.left || "150px",
            top: props.top || "0px",
        },

        "50%": {
            left: `${parseFloat(props.left) + 4}%` || "150px",
            top: props.top || "0px",
        },

        "100%": {
            left: props.left || "150px",
            top: props.top || "0px",
        },
    },
    width: "60px",
    height: "60px",
    backgroundColor: "orange",
    borderRadius: "8%",
    border: "1px solid rgb(136, 91, 8)",
    position: "relative",
    left: "60%",
    top: "10%",
    animation: "movement 1s ease infinite",
}));


function index(props: any) {
    const { targetKilled } = props
    const [position, setPosition] = useState<string[]>(['13%', '14%'])
    const [play] = useSound(KilledSound)
    const [movement, setMovement] = useState(true)

    const changePosition = () => {
        targetKilled()
        play()
        const top = `${Math.floor(Math.random() * 90)}%`
        const left = `${Math.floor(Math.random() * (92 - 2) + 2)}%`
        setPosition([top, left])
    }

    return (
        <div className={styles.targetWrapp}>
            <Target
                left={`${parseFloat(position[1]) + 2}%`}
                top={`${parseFloat(position[0])}%`}
                onClick={() => changePosition()}
            />
        </div>
    );
}

export default index;