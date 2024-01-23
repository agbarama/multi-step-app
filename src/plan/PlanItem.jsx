import { useEffect, useState } from "react";
import styles from "./styles/planitem.module.css";

const PlanItem = ({ plan, displayToggleBonus, plans, ...rest }) => {
  const [isToggle, setIsToggle] = useState(false);
  useEffect(() => {
    setIsToggle(plans.find((item) => (item.name === plan.name ? true : false)));
  }, [plans]);

  return (
    <div
      {...rest}
      className={`${styles.box} ${isToggle ? styles.toggleBox : ""}`}
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
