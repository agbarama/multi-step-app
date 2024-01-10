import React from "react";
import { selectedP } from "./data/plansArray";
import PlanItem from "./PlanItem";
import styles from "./styles/planlist.module.css";

const PlanList = () => {
  return (
    <div className={styles.boxes}>
      {selectedP.map((plan) => (
        <PlanItem key={plan.name} plan={plan} />
      ))}
    </div>
  );
};

export default PlanList;
