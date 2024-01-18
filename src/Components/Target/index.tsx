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
    // "@keyframes movement": {
    //     "0%": {
    //         left: props.left || "",
    //         top: props.top || "0px",
    //     },

    //     "50%": {
    //         left: `${parseFloat(props?.left) + 4}%` || "",
    //         top: props.top || "0px",
    //     },

    //     "100%": {
    //         left: props.left || "",
    //         top: props.top || "0px",
    //     },
    // },
    left: `${parseFloat(props?.left) + 4}%`,
    top: props.top,
    width: "60px",
    height: "60px",
    zIndex: 1,
    backgroundColor: "orange",
    borderRadius: "8%",
    border: "1px solid rgb(136, 91, 8)",
    position: "relative",
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
                left={position[1]}
                top={`${parseFloat(position[0])}%`}
                onClick={() => changePosition()}
            />
        </div>
    );
}

export default index;