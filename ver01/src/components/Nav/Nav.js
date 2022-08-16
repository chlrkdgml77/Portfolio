import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useOneContext } from '../../context/context1';

import styles from "./Nav.module.css"
import { FaBars } from "react-icons/fa";

import Logo from "../../img/logo2.png"

const Nav = () => {

  const {openSidebar} = useOneContext();

  return (
    <nav className={styles["nav-container"]}>
      <div className={styles["nav-center"]}>
        <div className={styles["nav-header"]}>
          <Link to="/">
            <img src={Logo} alt="logo"></img>
          </Link>
          <button type="button" className={styles["nav-toggle"]} onClick={openSidebar}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className={styles["nav-links"]}>
          <li>
            <NavLink to="/"
              className={({isActive}) => {return isActive ? styles.active : ""}}
            >Home</NavLink>
            <NavLink to="/about"
              className={({isActive}) => {return isActive ? styles.active : ""}}
            >About</NavLink>
            <NavLink to="/projects"
              className={({isActive}) => {return isActive ? styles.active : ""}}
            >Projects</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav