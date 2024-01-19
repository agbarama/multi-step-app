import styles from "./styles/summarycontainer.module.css";
import MobileButton from "../form/MobileButton";
import SelectedPlanList from "./SelectedPlanList";
import SelectedAddOnsList from "./SelectedAddOnsList";
import { useNavigate } from "react-router-dom";
import SumTotal from "./SumTotal";
import { useEffect, useState } from "react";

const SummaryContainer = ({ plansArray, submit, setSubmit }) => {
  const savedPlans = JSON.parse(localStorage.getItem("summaryPlan"));
  const savedAddOns = JSON.parse(localStorage.getItem("summaryAddOns"));

  // Display mobile button
  const [summaryButton, setSummaryButton] = useState(true);

  const [sumTotal, setSumTotal] = useState();
  // if (submit) {
  //   // map through the saved arrays and created an array with only prices
  //   const addOnPrices = savedAddOns.map((addOn) => addOn.price);
  //   const planPrice = savedPlans.map((plan) => plan.price);

  //   // Total addOns
  //   const addOnSum = addOnPrices.reduce(
  //     (acc, currentPrice) => acc + currentPrice,
  //     0
  //   );

  //   // Total plan
  //   const planSum = planPrice.reduce(
  //     (acc, currentPrice) => acc + currentPrice,
  //     0
  //   );
  // }

  // map through the saved arrays and created an array with only prices
  const addOnPrices = savedAddOns.map((addOn) => addOn.price);
  const planPrice = savedPlans.map((plan) => plan.price);

  // Total addOns
  const addOnSum = addOnPrices.reduce(
    (acc, currentPrice) => acc + currentPrice,
    0
  );

  // Total plan
  const planSum = planPrice.reduce(
    (acc, currentPrice) => acc + currentPrice,
    0
  );

  useEffect(() => {
    setSumTotal(addOnSum + planSum);
  }, []);

  const navigate = useNavigate();
  const back = () => {
    navigate("/ads");
  };

  const submitButton = () => {
    setInterval(() => {
      setSubmit(true);
      localStorage.clear();
    }, 1000);
  };
  return (
    <div className={`${styles.summaryContainer}  ${submit ? styles.hide : ""}`}>
      <div className={styles.summary}>
        <h1 className={styles.h}>Finishing up</h1>
        <p className={styles.p}>
          Double-check everything look Ok before confirming.
        </p>
        <SelectedPlanList savedPlans={savedPlans} />
        <div className={styles.border}></div>
        <SelectedAddOnsList savedAddOns={savedAddOns} />
        <SumTotal plansArray={plansArray} sumTotal={sumTotal} />
        <button className={styles.btnLight} onClick={back}>
          Go Back
        </button>
        <button className={styles.confirmBtn} onClick={submitButton}>
          Confirm
        </button>
        <MobileButton
          summaryButton={summaryButton}
          sumBack={back}
          submit={submitButton}
        />
      </div>
    </div>
  );
};

export default SummaryContainer;
