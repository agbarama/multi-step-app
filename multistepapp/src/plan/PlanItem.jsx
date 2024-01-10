import { useState } from "react";
import styles from "./styles/planitem.module.css";

const PlanItem = ({ setPlanArray, plan, displayToggleBonus }) => {
  const [planToggle, setPlanToggle] = useState(plan.toggle);

  const handleClick = () => {
    setPlanToggle(!planToggle);
  };

  return (
    <div
      onClick={() => handleClick(plan.name)}
      className={`${styles.box} ${planToggle ? styles.toggleBox : ""}`}
      data-plan-name={plan.name}
    >
      <img className={styles.icons} src={plan.icon} alt="" />
      <div>
        <p className={styles.planType}>{plan.name}</p>
        <p className={styles.price}>
          ${plan.price}/{plan.priceDuration}
        </p>
        <p
          className={`${styles.bonus} ${
            displayToggleBonus ? styles.toggleBonus : ""
          }`}
        >
          {plan.bonus}
        </p>
      </div>
    </div>
  );
};

export default PlanItem;
