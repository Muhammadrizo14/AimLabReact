import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function index() {
    const { pathname } = useLocation()


    return (
        <ul className={styles.navbar__list}>
            <li>
              <Link className={pathname === '/' ? styles.active : ''} to='/'>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                        d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z"
                        clip-rule="evenodd"/>
                </svg>
                <p>Home</p>
              </Link>
            </li>
          <li>
            <Link className={pathname === '/settings' ? styles.active : ''} to='/settings'>
              <svg className="w-[25px] h-[25px] text-gray-800 dark:text-white" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                      d="M17 10v1.1l1 .5.8-.8 1.4 1.4-.8.8.5 1H21v2h-1.1l-.5 1 .8.8-1.4 1.4-.8-.8a4 4 0 0 1-1 .5V20h-2v-1.1a4 4 0 0 1-1-.5l-.8.8-1.4-1.4.8-.8a4 4 0 0 1-.5-1H11v-2h1.1l.5-1-.8-.8 1.4-1.4.8.8a4 4 0 0 1 1-.5V10h2Zm.4 3.6c.4.4.6.8.6 1.4a2 2 0 0 1-3.4 1.4A2 2 0 0 1 16 13c.5 0 1 .2 1.4.6ZM5 8a4 4 0 1 1 8 .7 7 7 0 0 0-3.3 3.2A4 4 0 0 1 5 8Zm4.3 5H7a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h6.1a7 7 0 0 1-1.8-7Z"
                      clip-rule="evenodd"/>
              </svg>
              <p>Settings</p>
            </Link>
          </li>
          <li>
            <Link className={pathname === '/playgraund' ? styles.active : ''} to='/playgraund'>
              <svg className="w-[25px] h-[25px] text-gray-800 dark:text-white" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                      clip-rule="evenodd"/>
              </svg>
              <p>Playground</p>
            </Link>
          </li>
        </ul>
    );
}

export default index;