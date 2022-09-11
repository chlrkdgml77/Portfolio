import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./NavbarPhone.module.css";
import { HiOutlineHome } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { GiBlackBook } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaList } from "react-icons/fa";

const NavbarPhone = () => {
  const [showNav, setShowNav] = useState(false);
  const openNavHandler = () => {
    setShowNav(true);
  };
  const closeNavHandler = () => {
    setShowNav(false);
  };

  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles["nav-menu"]}>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                <Link to="/" className={styles["nav-link"]} onClick={closeNavHandler}>
                  <HiOutlineHome></HiOutlineHome> Home
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link to="/mypage" className={styles["nav-link"]} onClick={closeNavHandler}>
                  <FiUser></FiUser> Mypage
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link to="/products" className={styles["nav-link"]} onClick={closeNavHandler}>
                  <GiBlackBook></GiBlackBook> Products
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link to="/cart" className={styles["nav-link"]} onClick={closeNavHandler}>
                  <BsCartPlus></BsCartPlus> Cart
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link to="/contact" className={styles["nav-link"]} onClick={closeNavHandler}>
                  <AiOutlinePhone></AiOutlinePhone> Contact
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link to="/auth" className={styles["nav-link"]} onClick={closeNavHandler}>
                  <FiLogIn></FiLogIn> Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </header>
  );
}

export default NavbarPhone