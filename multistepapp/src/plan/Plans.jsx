import React, { useState } from "react";
import Navbar from "../form/Navbar";
import MobileHeader from "../form/MobileHeader";
import MobileButton from "../form/MobileButton";
import style from "../form/styles/home.module.css";
import styles from "./styles/plans.module.css";
import PlanList from "./PlanList";
import DurationToggle from "./DurationToggle";
import { useNavigate } from "react-router-dom";

const Plans = ({ plansArray, setPlansArray }) => {
  // Page indicators
  const [togglePage2, setTogglePage2] = useState(true);

  // Display mobile button
  const [plansButton, setPlansButton] = useState(true);

  const [displayToggleBonus, setDisplayToggleBonus] = useState(false);
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

  const next = () => {
    navigate("/ads");
  };
  return (
    <div className={styles.container}>
      <MobileHeader togglePage2={togglePage2} />
      <Navbar togglePage2={togglePage2} />
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

        <button onClick={back} className={styles.btnLight}>
          Go Back
        </button>
        <button onClick={next} className={styles.btnDark}>
          Next Step
        </button>
        <MobileButton
          plansButton={plansButton}
          planBack={back}
          planNext={next}
        />
      </div>
    </div>
  );
};

export default Plans;
