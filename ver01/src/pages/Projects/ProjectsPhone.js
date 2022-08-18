import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import styles from "./ProjectsPhone.module.css"

const dummyData = [
  {title: "Portfolio Project"},
  {title: "ToyProject TransferMarket"},
  {title: "ToyProject E-commerce"},
  {title: "Dummy Project"},
]

const ProjectsPhone = () => {

  const [index, setIndex] = useState(0);
  const {title} = dummyData[index];

  const indexPlusHandler = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const indexMinusHandler = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const checkIndex = (num) => {
    if (num > dummyData.length - 1) {
      return 0;
    }
    if (num < 0) {
      return dummyData.length - 1;
    }
    return num;
  };

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Link to="/projects/m1">
          <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
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
        <div className={styles["button-container"]}>
          <button className={styles["prev-btn"]} onClick={indexMinusHandler}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className={styles["next-btn"]} onClick={indexPlusHandler}>
            <FaChevronRight></FaChevronRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPhone;
