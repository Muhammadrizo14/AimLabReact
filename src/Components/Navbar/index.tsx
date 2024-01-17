import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.scss'
import { useEffect } from 'react';

function index() {
    const { pathname } = useLocation()


    return (
        <ul className={styles.navbar__list}>
            <li><Link className={pathname === '/' ? styles.active : ''} to='/'>Home</Link></li>
            <li><Link className={pathname === '/settings' ? styles.active : ''} to='/settings'>Settings</Link></li>
            <li><Link className={pathname === '/playgraund' ? styles.active : ''} to='/playgraund'>Playgraund</Link></li>
        </ul>
    );
}

export default index;