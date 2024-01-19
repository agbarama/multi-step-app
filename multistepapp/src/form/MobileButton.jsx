import styles from "./styles/mobilebutton.module.css";

const MobileButton = ({
  formButton,
  plansButton,
  addOnButton,
  summaryButton,
  planBack,
  planNext,
  addOnBack,
  addOnNext,
  sumBack,
  submit,
}) => {
  return (
    <div>
      <div className={styles.mobileButtons}>
        <button className={formButton ? styles.nextBtn : styles.hideButton}>
          Next Step
        </button>

        {/* Plans Buttons */}
        <button
          className={plansButton ? styles.btnLight : styles.hideButton}
          onClick={planBack}
        >
          Go Back
        </button>
        <button
          className={plansButton ? styles.btnDark : styles.hideButton}
          onClick={planNext}
        >
          Next Step
        </button>

        {/* AddOns Buttons */}
        <button
          className={addOnButton ? styles.btnLight : styles.hideButton}
          onClick={addOnBack}
        >
          Go Back
        </button>
        <button
          className={addOnButton ? styles.btnDark : styles.hideButton}
          onClick={addOnNext}
        >
          Next Step
        </button>

        {/* Summary Buttons */}
        <button
          className={summaryButton ? styles.btnLight : styles.hideButton}
          onClick={sumBack}
        >
          Go Back
        </button>
        <button
          className={summaryButton ? styles.sumBtn : styles.hideButton}
          onClick={submit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default MobileButton;
