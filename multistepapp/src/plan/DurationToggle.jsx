import { useState } from "react";
import styles from "./styles/durationtoggle.module.css";
import { mPlans, yPlans } from "./data/plansArray";

const DurationToggle = ({
  plansArray,
  setPlansArray,
  displayToggleBonus,
  setDisplayToggleBonus,
}) => {
  const [toggled, setToggled] = useState(false);
  const [toggledDuration, setToggledDuration] = useState(false);

  const handleClick = () => {
    setToggled(!toggled);
    setToggledDuration(!toggledDuration);
    setDisplayToggleBonus(!displayToggleBonus);
    setPlansArray(plansArray === mPlans ? yPlans : mPlans);
  };
  return (
    <div className={styles.durationSwitch}>
      <p
        className={`${styles.monDur} ${
          toggledDuration ? "" : styles.durToggle
        }`}
      >
        Monthly
      </p>
      <div
        onClick={handleClick}
        className={`${styles.switch} ${toggled ? styles.toggledSwitch : ""}`}
      >
        <div className={styles.switchIndicator}></div>
      </div>
      <p
        className={`${styles.yDur} ${toggledDuration ? styles.durToggle : ""}`}
      >
        Yearly
      </p>
    </div>
  );
};

export default DurationToggle;
