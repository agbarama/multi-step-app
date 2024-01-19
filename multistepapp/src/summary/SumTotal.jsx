import { useEffect, useState } from "react";
import styles from "./styles/sumtotal.module.css";
import { mPlans, yPlans } from "../plan/data/plansArray";

const SumTotal = ({ plansArray, toggleDuration, sumTotal }) => {
  const [duration, setDuration] = useState(toggleDuration ? "year" : "month");
  const [priceDuration, setPriceDuration] = useState(
    toggleDuration ? "yr" : "mo"
  );

  return (
    <div className={styles.total}>
      <p className={styles.sum}>Total (per {duration})</p>
      <p className={styles.totalPrice}>
        ${sumTotal}/{priceDuration}
      </p>
    </div>
  );
};

export default SumTotal;
