import React from "react";
import { Link } from "react-router-dom";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Link to="/projects/m0">
          <div className={styles.card}>
            <h3 className={styles.title}>Portfolio Project</h3>
            <div className={styles.bar}>
              <div className={styles.emptybar}></div>
              <div className={styles.filledbar}></div>
            </div>
            <div className={styles.circle}>
              <div className={styles.a}>
                More Details
                <div className={styles.wave}></div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/projects/m1">
          <div className={styles.card}>
            <h3 className={styles.title}>Toy Project_<br></br>TransferMarket</h3>
            <div className={styles.bar}>
              <div className={styles.emptybar}></div>
              <div className={styles.filledbar}></div>
            </div>
            <div className={styles.circle}>
              <div className={styles.a}>
                More Details
                <div className={styles.wave}></div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/projects/m2">
          <div className={styles.card}>
            <h3 className={styles.title}>Toy Project_<br></br>E-commerce</h3>
            <div className={styles.bar}>
              <div className={styles.emptybar}></div>
              <div className={styles.filledbar}></div>
            </div>
            <div className={styles.circle}>
              <div className={styles.a}>
                More Details
                <div className={styles.wave}></div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/projects/m3">
          <div className={styles.card}>
            <h3 className={styles.title}>Dummy</h3>
            <div className={styles.bar}>
              <div className={styles.emptybar}></div>
              <div className={styles.filledbar}></div>
            </div>
            <div className={styles.circle}>
              <div className={styles.a}>
                More Details
                <div className={styles.wave}></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
