import {useEffect, useState} from 'react'
import styles from './style.module.scss'
import Target from '../../Components/Target'
import Popup from '../../Components/Popup'
import Timer from '../../Components/Timer'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

function index() {
  const [currentPatrons, setCurrentPatrons] = useState(0)
  const [targetKilled, setTargetKilled] = useState(0)
  const [start, setStart] = useState(true)
  const [result, setResult] = useState(false)


  const fire = () => {
    !start && setCurrentPatrons(prev => prev + 1)
  }


  useEffect(() => {
    window.addEventListener('keypress', (e) => {
      if (e.code === 'KeyX') {
        setStart(false)
        setResult(false)
      }
    })
  }, [])


  const CheckResults = () => {
    setResult(true)
    setStart(true)
  }




  return (
    <div className={styles.aimContainer} onClick={() => fire()}>
      {!start && <Timer checkResults={CheckResults}/>}
      <h3>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000">
          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
             fill="#fff" stroke="none">
            <path d="M1144 5091 c-17 -10 -36 -32 -42 -47 -6 -16 -78 -303 -159 -639
l-147 -610 2 -289 3 -289 -73 -151 -73 -151 0 -1215 c1 -957 4 -1223 14 -1252
7 -21 26 -49 42 -63 l31 -25 459 0 459 0 32 29 c29 26 33 36 40 103 4 40 10
584 14 1209 6 883 4 1147 -5 1185 -7 27 -41 109 -77 183 l-64 134 0 279 0 279
-46 217 c-97 464 -233 1061 -245 1080 -32 51 -110 67 -165 33z"/>
            <path d="M2525 5100 c-57 -23 -59 -31 -213 -666 l-147 -609 -5 -315 -5 -315
-70 -145 -70 -145 1 -1205 c1 -891 4 -1216 13 -1247 6 -24 24 -52 42 -67 l31
-26 458 0 458 0 31 26 c18 15 36 43 42 67 9 31 12 358 13 1247 l1 1205 -72
152 -73 152 0 279 c0 257 -2 289 -24 400 -50 244 -247 1128 -258 1156 -21 52
-96 80 -153 56z"/>
            <path d="M3881 5097 c-13 -6 -32 -23 -42 -37 -11 -15 -78 -279 -168 -657
l-151 -633 0 -284 0 -284 -72 -148 -73 -149 -3 -815 c-4 -931 10 -1626 33
-1671 32 -61 17 -59 513 -59 504 0 495 -1 528 67 17 36 18 94 19 1263 l0 1225
-67 140 -68 141 0 272 c0 237 -3 286 -21 375 -59 291 -263 1186 -275 1209 -26
51 -100 72 -153 45z"/>
            <path d="M723 230 c-36 -21 -50 -43 -53 -80 -5 -54 1 -73 34 -106 l34 -34 450
0 c269 0 461 4 476 10 56 21 82 110 51 170 -31 60 -31 60 -517 60 -421 0 -445
-1 -475 -20z"/>
            <path d="M2084 231 c-61 -37 -72 -138 -20 -190 l26 -26 471 0 471 0 29 33 c23
26 29 41 29 80 0 27 -7 57 -16 70 -36 52 -40 52 -516 52 -416 0 -445 -1 -474
-19z"/>
            <path d="M3448 235 c-53 -30 -73 -106 -43 -165 31 -60 30 -60 524 -60 l449 0
31 25 c60 51 62 132 5 186 l-26 24 -456 2 c-391 2 -461 0 -484 -12z"/>
          </g>
        </svg>
        <span>{currentPatrons}</span>
      </h3>
      <h3>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 512.000000 512.000000">
          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
             fill="#fff" stroke="none">
            <path d="M2355 5110 c-401 -46 -773 -203 -1070 -452 -229 -192 -390 -397 -521
-663 -229 -466 -266 -1002 -103 -1500 71 -215 145 -332 273 -430 116 -89 234
-130 419 -145 88 -7 121 -15 172 -39 88 -41 148 -99 190 -185 30 -60 37 -88
45 -176 8 -88 15 -116 45 -176 42 -85 102 -144 189 -185 75 -35 174 -48 230
-29 78 26 135 103 136 186 0 50 40 133 77 160 95 71 232 47 292 -49 12 -20 25
-64 30 -104 10 -80 28 -120 70 -156 45 -38 95 -50 169 -44 136 13 256 97 317
221 30 60 37 88 45 176 8 88 15 116 45 176 42 86 102 144 190 185 51 24 84 32
176 39 190 16 305 58 426 155 124 100 194 213 263 424 145 442 128 937 -46
1366 -267 653 -844 1113 -1544 1230 -114 19 -403 27 -515 15z m-849 -1905 c27
-14 101 -65 164 -115 133 -104 227 -154 330 -176 95 -19 124 -35 145 -80 13
-28 16 -50 11 -91 -29 -251 -245 -443 -496 -443 -320 0 -564 309 -485 615 32
125 122 251 207 294 54 27 63 26 124 -4z m2231 4 c53 -26 131 -112 166 -184
100 -203 64 -419 -95 -582 -148 -151 -385 -186 -581 -87 -183 93 -321 377
-242 498 17 26 62 45 155 66 77 17 170 63 248 123 37 28 96 73 132 100 65 50
133 86 159 87 8 0 34 -9 58 -21z m-1100 -830 c36 -11 93 -70 121 -126 70 -137
67 -275 -8 -354 -40 -43 -75 -50 -120 -24 -14 8 -45 14 -70 14 -25 0 -56 -6
-70 -14 -45 -26 -80 -19 -120 24 -61 64 -75 160 -41 270 38 121 99 196 178
217 48 12 69 11 130 -7z"/>
            <path d="M1072 1509 c-49 -25 -84 -67 -102 -123 -19 -58 -7 -336 19 -446 95
-415 400 -750 798 -879 171 -55 183 -56 778 -56 500 0 558 2 635 19 475 104
834 463 936 936 13 63 18 129 19 255 0 196 -9 227 -84 280 -39 27 -50 30 -120
30 -65 0 -83 -4 -113 -24 -50 -35 -74 -75 -102 -171 -33 -113 -58 -170 -111
-249 -121 -183 -306 -305 -523 -347 -106 -20 -977 -20 -1084 0 -211 40 -401
165 -520 339 -50 73 -82 145 -114 256 -42 145 -91 193 -203 199 -53 2 -75 -1
-109 -19z"/>
          </g>
        </svg>

        <span>{targetKilled}</span>
      </h3>


      {Array.apply(null, Array(useSelector((state:any) => state.settings.countTarget))).map((val, idx) => (
        <div className={styles.targetWrap}>
          <Target key={idx} targetKilled={() => setTargetKilled(prev => prev + 1)}/>
        </div>
      ))}

      {start && (
        <Popup>
          <h3>To start the game click to Play Or Press X</h3>

          <button onClick={() => setStart(false)} style={{marginTop: `40px`}}>Play</button>
        </Popup>
      )}

      {result && (
        <Popup>
          <h3>Results</h3>
          <p>Bullet spent: {currentPatrons}</p>
          <p>Killed: {targetKilled}</p>
          <p>Missed: {currentPatrons - targetKilled}</p>
          <button
            onClick={() => (
              setStart(false),
                setResult(false),
                setCurrentPatrons(0),
                setTargetKilled(0)
            )}
            style={{marginTop: `40px`, marginBottom: '10px'}}
          >
            Click to play again or press X!
          </button>
          <br/>
          <Link to='/'>Home</Link>
        </Popup>
      )
      }

    </div>
  )
}

export default index;
