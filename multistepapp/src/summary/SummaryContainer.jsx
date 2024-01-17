import styles from "./styles/summarycontainer.module.css";
import SelectedPlanList from "./SelectedPlanList";
import SelectedAddOnsList from "./SelectedAddOnsList";

const SummaryContainer = () => {
  const savedPlans = JSON.parse(localStorage.getItem("summaryPlan"));
  console.log(savedPlans);
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summary}>
        <h1 className={styles.h}>Finishing up</h1>
        <p className={styles.p}>
          Double-check everything look Ok before confirming.
        </p>
        <SelectedPlanList savedPlans={savedPlans} />
        <div className={styles.border}></div>
        <SelectedAddOnsList />

        <div className={styles.total}>
          <p className={styles.sum}></p>
          <p className={styles.totalPrice}>/mo</p>
        </div>

        <button className={styles.btnLight}>Go Back</button>
        <button className={styles.confirmBtn}>Confirm</button>
      </div>
    </div>
  );
};

export default SummaryContainer;
