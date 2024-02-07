import styles from './style.module.scss'
import Navbar from '../../Components/Navbar'

function index() {
  return (
    <div className={styles.home}>
      <Navbar />

      <main>
        <h1>AIM trainer</h1>
      </main>

      <footer>
        <a className={styles.github} href="https://github.com/Muhammadrizo14/AimLabReact">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
          </svg>
          <p>GitHub</p>
        </a>
        <p className={styles.author}>Created by <a href="https://t.me/ubuntuous">@ubuntuous</a></p>
      </footer>
    </div>
  );
}

export default index;