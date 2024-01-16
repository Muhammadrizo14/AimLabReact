import { useState } from 'react'
import styles from './App.module.scss'
import Target from './Components/Target'
import Popup from './Components/Popup'

function App() {
  const [currentPatrons, setCurrentPatrons] = useState(0)
  const [targetKilled, setTargetKilled] = useState(0)
  const [start, setStart] = useState(true)

  const fire = () => {
    !start && setCurrentPatrons(prev => prev + 1)
    console.log(currentPatrons - targetKilled);
  }



  return (
    <div className={styles.aimContainer} onClick={() => fire()}>
      <h3><span>{currentPatrons}</span></h3>
      <h3>{targetKilled}</h3>
      <Target setTargetKilled={setTargetKilled} />
      {start && (
        <Popup>
          <h3>To start the game click to Play</h3>

          <button onClick={() => setStart(false)}>Play</button>
        </Popup>
      )}
    </div>
  )
}

export default App
