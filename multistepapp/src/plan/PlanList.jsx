import React from "react";
import { selectedP } from "./data/plansArray";
import PlanItem from "./PlanItem";
import styles from "./styles/planlist.module.css";

const PlanList = ({ plansArray, setPlanArray, displayToggleBonus }) => {
  return (
    <div className={styles.boxes}>
      {plansArray.map((plan) => (
        <PlanItem
          key={plan.name}
          plan={plan}
          setPlanArray={setPlanArray}
          displayToggleBonus={displayToggleBonus}
        />
      ))}
    </div>
  );
};

export default PlanList;
