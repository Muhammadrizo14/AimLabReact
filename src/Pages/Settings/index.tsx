import styles from './style.module.scss'
import Navbar from '../../Components/Navbar'
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {trainingTime, countTarget, movementTarget} from "../../store/settingSlice.ts";

function index() {
  const [movement, setMovement] = useState<boolean>(useSelector((state) => state.settings.movement))
  const [timeTraining, setTimeTraining] = useState<number>(useSelector((state) => state.settings.timeTraining))
  const [countTargets, setCountTarget] = useState<number>(useSelector((state) => state.settings.countTarget))
  const dispatch = useDispatch();

  const apply = ()=> {
    dispatch(trainingTime(timeTraining))
    dispatch(movementTarget(movement))
    dispatch(countTarget(countTargets))
  }




  return (
    <div className={styles.settings}>
      <Navbar/>
      <div className={styles.timeTrainingWrap}>
        <label htmlFor="timeTraining">Time to training</label>
        <input type="number" min={1} id={styles.timeTraining} value={timeTraining} onChange={(e:any)=> setTimeTraining(e.target.value)} placeholder='seconds'/>
      </div>
      <div className={styles.targetsNumber}>
        <label htmlFor="how many target would tou want?">Targets Count</label>
        <input type="number" min={1} id='targetcount' placeholder='how many target would you want?' value={countTargets} onChange={(e:any)=> setCountTarget(e.target.value)}/>
      </div>
      <div className={styles.targetMovement}>
        <label>Would you like to target should move?</label>
        <div className={`${styles.btn} ${movement && styles.active}`} onClick={() => setMovement(prev => !prev)}>
          <div className={styles.btnSwitch}></div>
        </div>
      </div>
      <button onClick={()=> apply()}>apply</button>
    </div>
  );
}

export default index;