import React, {Fragment} from 'react'
import {Link} from "react-router-dom"

import styles from "./Home.module.css"

const Home = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles["main-text"]}>
          <h1 className={styles["main-h1"]}>
            My Portfolio <span className={styles.dummy}>ver01</span>
          </h1>
          <p className={styles["main-p"]}>Sharing schedules and photos, Communities, and more...</p>
          <Link to="/contact" className={styles.btn}>Contact</Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Home