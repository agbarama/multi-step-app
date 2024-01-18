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
  // Page indicator
  const [togglePage1, setTogglePage1] = useState(false);
  const [togglePage2, setTogglePage2] = useState(true);
  const [togglePage3, setTogglePage3] = useState(false);
  const [togglePage4, setTogglePage4] = useState(false);

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
      <MobileHeader />
      <Navbar
        togglePage1={togglePage1}
        togglePage2={togglePage2}
        togglePage3={togglePage3}
        togglePage4={togglePage4}
      />
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
        <MobileButton />
      </div>
    </div>
  );
};

export default Plans;
