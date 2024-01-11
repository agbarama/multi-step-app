import React, { useState } from "react";
import Navbar from "../form/Navbar";
import style from "../form/styles/home.module.css";
import styles from "./styles/plans.module.css";
import PlanList from "./PlanList";
import DurationToggle from "./DurationToggle";
import { useNavigate } from "react-router-dom";

const Plans = ({ plansArray, setPlansArray }) => {
  const [displayToggleBonus, setDisplayToggleBonus] = useState(false);
  const navigate = useNavigate();

  const backButton = () => {
    navigate("/");
  };

  const nextButton = () => {
    navigate("/ads");
  };
  return (
    <div className={style.container}>
      <Navbar />
      <div className={styles.plan}>
        <h1>Select your plan</h1>
        <p className={styles.p}>
          You have the option of monthly or yearly billing.
        </p>
        <PlanList
          plansArray={plansArray}
          setPlansArray={setPlansArray}
          displayToggleBonus={displayToggleBonus}
        />
        <DurationToggle
          plansArray={plansArray}
          setPlansArray={setPlansArray}
          displayToggleBonus={displayToggleBonus}
          setDisplayToggleBonus={setDisplayToggleBonus}
        />

        <button onClick={backButton} className={styles.btnLight}>
          Go Back
        </button>
        <button onClick={nextButton} className={styles.btnDark}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Plans;
