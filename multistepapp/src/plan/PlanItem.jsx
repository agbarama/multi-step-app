import { useEffect, useState } from "react";
import styles from "./styles/planitem.module.css";

const PlanItem = ({ plansArray, setPlansArray, plan, displayToggleBonus }) => {
  // Array to save selected plan to local storage
  const [summaryPlan, setSummaryPlan] = useState(
    () => JSON.parse(localStorage.getItem("summaryPlan")) || []
  );

  const activePlan = localStorage.getItem("active");

  useEffect(() => {
    const savedPlan = localStorage.getItem("summaryPlan");
    if (savedPlan) {
      setSummaryPlan(JSON.parse(savedPlan));
    }
    // To toggle saved plan on refresh
    const toggleSaved = plansArray.map((plan) => ({
      ...plan,
      toggled: plan.name === activePlan ? !plan.toggled : false,
    }));
    setPlansArray(toggleSaved);
  }, []);

  // Plan toggle function
  const togglePlan = (clickedPlan) => {
    const updatedToggledArray = plansArray.map((plan) => ({
      ...plan,
      toggled: plan.name === clickedPlan ? !plan.toggled : false,
    }));

    setPlansArray(updatedToggledArray);
  };

  // Event to toggle clicked plan
  const handleClick = (clickedPlan) => {
    togglePlan(clickedPlan);

    // Add plan to localstorage array
    setSummaryPlan([{ planName: clickedPlan }]);
    clearArr(clickedPlan);

    // local storage data of clicked plan to toggle on refresh
    if (localStorage.getItem("active") == clickedPlan) {
      localStorage.setItem("active", "");
    } else {
      localStorage.setItem("active", clickedPlan);
    }
  };

  // To save the state whenever the plan changes
  useEffect(() => {
    localStorage.setItem("summaryPlan", JSON.stringify(summaryPlan));
  }, [summaryPlan]);

  // // Function to remove untoggled plan from summaryPlan array
  const clearArr = (clickedPlan) => {
    if (plan.name === activePlan) {
      setSummaryPlan(summaryPlan.filter((sumPlan) => sumPlan === clickedPlan));
    }
  };

  return (
    <div
      onClick={() => handleClick(plan.name)}
      className={`${styles.box} ${plan.toggled ? styles.toggleBox : ""}`}
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
