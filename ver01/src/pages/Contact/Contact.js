import React from "react";

import styles from "./Contact.module.css";
import Icon1 from "../../img/icon/email-12-64.png";
import Icon2 from "../../img/icon/github-64.png";
import Icon3 from "../../img/icon/facebook-3-64.png";
import Img1 from "../../img/GitHub-Logo.png"

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles["contact-center"]}>
        <article className={styles.header}>
          <h3>My contact information is...</h3>
        </article>
        {/* <div className={styles["contact-sub"]}>
          <article className={styles.contact}>
            <span className={styles.icon}>
              <img src={Icon1}></img>
            </span>
            <h4>Email</h4>
            <p>joseph0926@naver.com</p>
          </article>
          <article className={styles.contact}>
            <span className={styles.icon}>
              <img src={Icon2}></img>
            </span>
            <h4>Github</h4>
            <p>https://github.com/chlrkdgml77</p>
          </article>
          <article className={styles.contact}>
            <span className={styles.icon}>
              <img src={Icon3}></img>
            </span>
            <h4>dummy</h4>
            <p>asdfqwerzxcv</p>
          </article>
        </div> */}
        <div className={styles.card}>
          <div className={styles.imgBox}>
            <img src={Img1}></img>
          </div>
          <div className={styles.details}>
            <div className={styles.content}>
              <h2>Github</h2>
              <p>https://github.com/chlrkdgml77</p>
              <h2>Email</h2>
              <p>joseph0926@naver.com</p>
              <h2>dummy</h2>
              <p>https://github.com/chlrkdgml77</p>
              <div className={styles.ico}>
                <a href="https://github.com/chlrkdgml77">
                  <img src={Icon1}></img>
                </a>
                <a href="https://github.com/chlrkdgml77">
                  <img src={Icon2}></img>
                </a>
                <a href="https://github.com/chlrkdgml77">
                  <img src={Icon3}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
