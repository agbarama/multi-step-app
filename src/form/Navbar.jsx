import styles from "./styles/home.module.css";
import backgroundImage from "../assets/backgrounds/bg-sidebar-desktop.svg";
import { useState } from "react";

const Navbar = ({ togglePage1, togglePage2, togglePage3, togglePage4 }) => {
  return (
    <div>
      <div className={styles.sideBar}>
        <img className={styles.deskBg} src={backgroundImage} alt="" />
        <div className={styles.stages}>
          <div className={styles.steps}>
            <p
              className={`${styles.pageIndicator} ${
                togglePage1 ? styles.pageToggle : ""
              }`}
            >
              1
            </p>
            <div>
              <p className={styles.step}>STEP 1</p>
              <p className={styles.stepText}>YOUR INFO</p>
            </div>
          </div>

          <div className={styles.steps}>
            <p
              className={`${styles.pageIndicator} ${
                togglePage2 ? styles.pageToggle : ""
              }`}
            >
              2
            </p>
            <div>
              <p className={styles.step}>STEP 2</p>
              <p className={styles.stepText}>SELECT PLAN</p>
            </div>
          </div>
          <div className={styles.steps}>
            <p
              className={`${styles.pageIndicator} ${
                togglePage3 ? styles.pageToggle : ""
              }`}
            >
              3
            </p>
            <div>
              <p className={styles.step}>STEP 3</p>

              <p className={styles.stepText}>ADD-ONS</p>
            </div>
          </div>
          <div className={styles.steps}>
            <p
              className={`${styles.pageIndicator} ${
                togglePage4 ? styles.pageToggle : ""
              }`}
            >
              4
            </p>
            <div>
              <p className={styles.step}>STEP 1</p>
              <p className={styles.stepText}>SUMMARY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
