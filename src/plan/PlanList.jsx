import React, { useEffect, useState } from "react";
import PlanItem from "./PlanItem";
import styles from "./styles/planlist.module.css";

const PlanList = ({ plansArray, setPlansArray, displayToggleBonus }) => {
  const savedPlans = JSON.parse(localStorage.getItem("summaryPlan"));
  const [plans, setPlans] = useState(savedPlans || []);

  const togglePlan = (clickedPlan) => {
    setPlans((data) => {
      if (data.find((plan) => plan.name === clickedPlan.name)) {
        return data.filter((plan) => plan.name !== clickedPlan.name);
      } else {
        return [clickedPlan];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("summaryPlan", JSON.stringify(plans));
  }, [plans]);

  return (
    <div className={styles.boxes}>
      {plansArray.map((plan, i) => (
        <PlanItem
          key={i}
          plan={plan}
          displayToggleBonus={displayToggleBonus}
          plans={plans}
          onClick={() => togglePlan(plan)}
        />
      ))}
    </div>
  );
};

export default PlanList;
