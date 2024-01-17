import styles from './style.module.scss'
import Navbar from '../../Components/Navbar'

function index() {
    return (
        <div className={styles.main}>
            <Navbar />
        </div>
    );
}

export default index;