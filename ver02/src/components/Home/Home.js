import React from 'react'

import styles from "./Home.module.css"
import IMG from "../../img/main-book.png"
import { Link } from 'react-router-dom'
import {GrContact} from "react-icons/gr"

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles["home-container"]}>
        <div className={styles["home-content"]}>
          <div className={styles["home-img"]}>
            <img src={IMG}></img>
          </div>
          <div className={styles["home-data"]}>
            <h1 className={styles["home-title"]}>
              Book Rental Service
            </h1>
            <h3 className={styles["home-subtitle"]}>
              수많은 책을 자유롭게 대여해보세요.
            </h3>
            <p className={styles["home-desc"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem architecto iure quisquam nostrum qui quia, aliquid accusantium repellat error a quaerat? Omnis a quos laborum quo pariatur, totam reprehenderit.
            </p>
            <Link to="/contact">
              Contact <GrContact></GrContact>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home