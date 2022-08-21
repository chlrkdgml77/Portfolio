import React, { useState } from "react";

import Modal from "../../UI/Modal";

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
      <ul className={styles.lists}>
        <li className={styles.list}>
          {modalShow && (
            <Modal onClose={modalHideHandler}>
              <h3>Introduce</h3>
              <p>
                피고 피가 위하여서, 위하여서. 되는 그들의 피어나는 싶이 길을 것이다. 온갖 품으며, 갑 풀이 못할 아름다우냐? 인생의 있는 이상{" "}
                <br></br>
                우리의 그와 내는 되려니와, 우리 봄날의 봄바람이다. 온갖 유소년에게서 위하여 눈에 피어나기 우리 안고, 있으랴? 이상은 위하여{" "}
                <br></br>
                같이, 예수는 위하여서. 것은 같은 얼음에 때문이다. 쓸쓸한 피에 어디 가장 그들은 모래뿐일 소담스러운 심장의 때문이다. 되는{" "}
                <br></br>
                노년에게서 얼음과 무엇을 그들의 길을 청춘의 사막이다. 목숨을 봄바람을 가슴이 구하지 것이다.
              </p>
            </Modal>
          )}
          <div className={styles.title} onClick={modalShowHandler}>
            <h2>자기소개</h2>
            <FaArrowAltCircleRight></FaArrowAltCircleRight>
          </div>
        </li>
        <li className={styles.list}>
          {modalShow && (
            <Modal onClose={modalHideHandler}>
              <h3>Introduce</h3>
              <p>
                피고 피가 위하여서, 위하여서. 되는 그들의 피어나는 싶이 길을 것이다. 온갖 품으며, 갑 풀이 못할 아름다우냐? 인생의 있는 이상{" "}
                <br></br>
                우리의 그와 내는 되려니와, 우리 봄날의 봄바람이다. 온갖 유소년에게서 위하여 눈에 피어나기 우리 안고, 있으랴? 이상은 위하여{" "}
                <br></br>
                같이, 예수는 위하여서. 것은 같은 얼음에 때문이다. 쓸쓸한 피에 어디 가장 그들은 모래뿐일 소담스러운 심장의 때문이다. 되는{" "}
                <br></br>
                노년에게서 얼음과 무엇을 그들의 길을 청춘의 사막이다. 목숨을 봄바람을 가슴이 구하지 것이다.
              </p>
            </Modal>
          )}
          <div className={styles.title} onClick={modalShowHandler}>
            <h2>장단점</h2>
            <FaArrowAltCircleRight></FaArrowAltCircleRight>
          </div>
        </li>
        <li className={styles.list}>
          {modalShow && (
            <Modal onClose={modalHideHandler}>
              <h3>Introduce</h3>
              <p>
                피고 피가 위하여서, 위하여서. 되는 그들의 피어나는 싶이 길을 것이다. 온갖 품으며, 갑 풀이 못할 아름다우냐? 인생의 있는 이상{" "}
                <br></br>
                우리의 그와 내는 되려니와, 우리 봄날의 봄바람이다. 온갖 유소년에게서 위하여 눈에 피어나기 우리 안고, 있으랴? 이상은 위하여{" "}
                <br></br>
                같이, 예수는 위하여서. 것은 같은 얼음에 때문이다. 쓸쓸한 피에 어디 가장 그들은 모래뿐일 소담스러운 심장의 때문이다. 되는{" "}
                <br></br>
                노년에게서 얼음과 무엇을 그들의 길을 청춘의 사막이다. 목숨을 봄바람을 가슴이 구하지 것이다.
              </p>
            </Modal>
          )}
          <div className={styles.title} onClick={modalShowHandler}>
            <h2>목표 및 태도</h2>
            <FaArrowAltCircleRight></FaArrowAltCircleRight>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
