import React, { useState } from "react";

import Modal from "../../UI/Modal";
import DUMMY_DATA from "../../DUMMY_DATA";
import Chart from "../../components/Chart/Chart";

import styles from "./About.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Img from "../../img/messi_01.png";

const About = () => {
  const [modalShow, setModalShow] = useState(false);
  const modalShowHandler = () => {
    setModalShow(true);
  };
  const modalHideHandler = () => {
    setModalShow(false);
  };

  return (
    <div className={styles.container}>
      <Chart></Chart>
      <ul className={styles.lists}>
        <li className={styles.list}>
          {modalShow && <Modal onClose={modalHideHandler}></Modal>}
          <div className={styles.title} onClick={modalShowHandler}>
            <h2>자기소개</h2>
            <FaArrowAltCircleRight></FaArrowAltCircleRight>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
