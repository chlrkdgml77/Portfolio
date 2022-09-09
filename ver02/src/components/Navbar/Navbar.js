import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="#" className={styles["nav-logo"]}>asdf</Link>
        <div className={styles["nav-menu"]}>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-item"]}>
              <Link to="#" className={styles["nav-link"]}></Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link to="#" className={styles["nav-link"]}></Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link to="#" className={styles["nav-link"]}></Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link to="#" className={styles["nav-link"]}></Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link to="#" className={styles["nav-link"]}></Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar