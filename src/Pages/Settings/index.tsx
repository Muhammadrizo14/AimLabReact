import styles from './style.module.scss'
import Navbar from '../../Components/Navbar'
import { useState } from 'react';

function index() {
    const [movement, setMovement] = useState<boolean>(false)

    return (
        <div className={styles.settings}>
            <Navbar />
            <div className={styles.timeTrainingWrap}>
                <label htmlFor="timeTraining">Time to training</label>
                <input type="number" min={1} id={styles.timeTraining} placeholder='seconds' />
            </div>
            <div className={styles.targetsNumber}>
                <label htmlFor="how many target would tou want?">Targets Count</label>
                <input type="number" min={1} id='targetcount' placeholder='how many target would you want?' />
            </div>
            <div className={styles.targetMovement}>
                <label>Would you like to target should move?</label>
                <div className={`${styles.btn} ${movement && styles.active}`} onClick={() => setMovement(prev => !prev)}>
                    <div className={styles.btnSwitch}></div>
                </div>
            </div>
        </div>
    );
}

export default index;