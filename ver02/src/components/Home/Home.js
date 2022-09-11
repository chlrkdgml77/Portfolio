import React from "react";

import styles from "./Home.module.css";
import IMG from "../../img/messi_01.png";
import { Link } from "react-router-dom";
import { GrContact } from "react-icons/gr";

const Home = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.text}>
          <h5>바르셀로나 영입시장</h5>
          <h1>Barcelona</h1>
          <h5 className={styles["text-light"]}>Transfer Market</h5>
        </div>
        <div className={styles["main-btn"]}>
          <Link to="/products" className={styles.products}>Products</Link>
          <Link to="/contact" className={styles.contact}>Contact</Link>
        </div>
        <div className={styles.img}>
          <img src={IMG}></img>
        </div>
      </div>
    </section>
  );
};

export default Home;
