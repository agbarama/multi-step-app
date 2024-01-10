import React from "react";
import Navbar from "../form/Navbar";
import style from "../form/styles/home.module.css";
import styles from "./styles/plans.module.css";
import PlanList from "./PlanList";
import DurationToggle from "./DurationToggle";

const Plans = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={styles.plan}>
        <h1>Select your plan</h1>
        <p className={styles.p}>
          You have the option of monthly or yearly billing.
        </p>
        <PlanList />
        <DurationToggle />

        <button className={styles.btnLight}>Go Back</button>
        <button className={styles.btnDark}>Next</button>
      </div>
    </div>
  );
};

export default Plans;
