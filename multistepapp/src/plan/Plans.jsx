import React from "react";
import Navbar from "../form/Navbar";
import style from "../form/styles/home.module.css";
import styles from "./styles/plans.module.css";

const Plans = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <div class={styles.plan}>
        <h1>Select your plan</h1>
        <p class="p">You have the option of monthly or yearly billing.</p>
        <div id="reload" class="boxes js-boxes"></div>

        <div class="duration-switch">
          <p class="mon-dur js-mon-dur dur-toggle">Monthly</p>
          <div class="switch js-switch-indic">
            <div class="switch-indicator"></div>
          </div>
          <p class="yr-dur js-yr-dur">Yearly</p>
        </div>
        <button class="btn-light desk-btn js-back-btn">Go Back</button>
        <button class="btn-dark desk-btn js-next-btn">Next</button>
      </div>
    </div>
  );
};

export default Plans;
