import React from "react";
import { selectedP } from "./data/plansArray";

const PlanList = () => {
  return (
    <div>
      <p>
        {selectedP.map((plan) => (
          <p>{plan.name}</p>
        ))}
      </p>
    </div>
  );
};

export default PlanList;
