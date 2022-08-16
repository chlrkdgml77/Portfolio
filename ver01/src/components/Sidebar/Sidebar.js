import React from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useOneContext } from "../../context/context1";

import styles from "./Sidebar.module.css";
import styled from "styled-components";
import Logo from "../../img/logo2.png";

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useOneContext();

  return (
    <SidebarContainer>
      <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className={styles["sidebar-header"]}>
          <img src={Logo} alt="logo" className={styles.logo}></img>
          <button type="button" className={styles["close-btn"]} onClick={closeSidebar}>
            <FaTimes></FaTimes>
          </button>
        </div>
        <ul className={styles.links}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? styles.active : "";
              }}
              onClick={closeSidebar}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? styles.active : "";
              }}
              onClick={closeSidebar}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => {
                return isActive ? styles.active : "";
              }}
              onClick={closeSidebar}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #777;
    transition: all 1s ease;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  @media screen and (min-width: 992px) {
  .sidebar {
    display: none;
  }
}
`;

export default Sidebar;
