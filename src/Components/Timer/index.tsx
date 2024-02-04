import { useEffect, useState } from 'react';
import styles from './style.module.scss'
import {useSelector} from "react-redux";


interface IProps {
    checkResults: () => void
}


const index: React.FC<IProps> = ({ checkResults }) => {
    const [timer, setTimer] = useState<number>(useSelector((state) => state.settings.timeTraining))



    useEffect(() => {
        if (timer <= 0) {
            console.log('Timer reached 0!');
            checkResults()
            return;
        }

        const timerId = setInterval(() => {
            setTimer(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timer]);


    return (
        <div className={styles.timer}>
            <h3>{timer}seconds</h3>
        </div>
    );
}

export default index;