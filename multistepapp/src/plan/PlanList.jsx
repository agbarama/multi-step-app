import React from "react";
import { selectedP } from "./data/plansArray";
import PlanItem from "./PlanItem";
import styles from "./styles/planlist.module.css";

const PlanList = ({ plansArray, setPlansArray, displayToggleBonus }) => {
  return (
    <div className={styles.boxes}>
      {plansArray.map((plan) => (
        <PlanItem
          key={plan.name}
          plan={plan}
          plansArray={plansArray}
          setPlansArray={setPlansArray}
          displayToggleBonus={displayToggleBonus}
        />
      ))}
    </div>
  );
};

export default PlanList;
