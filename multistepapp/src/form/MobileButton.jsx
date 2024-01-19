import styles from "./styles/mobilebutton.module.css";

const MobileButton = ({
  formButton,
  backButton,
  nextButton,
  addOnBackButton,
  addOnNextButton,
  confirmButton,
  planBack,
  planNext,
  addOnBack,
  addOnNext,
}) => {
  return (
    <div>
      <div className={styles.mobileButtons}>
        <button className={formButton ? styles.nextBtn : styles.hideButton}>
          Next
        </button>
        <button
          className={backButton ? styles.btnLight : styles.hideButton}
          onClick={planBack}
        >
          Back
        </button>
        <button
          className={nextButton ? styles.btnDark : styles.hideButton}
          onClick={planNext}
        >
          Next
        </button>
        <button
          className={addOnBackButton ? styles.btnLight : styles.hideButton}
          onClick={addOnBack}
        >
          Back
        </button>
        <button
          className={addOnBackButton ? styles.btnDark : styles.hideButton}
          onClick={addOnNext}
        >
          Next
        </button>
        <button className={confirmButton ? styles.sumBtn : styles.hideButton}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default MobileButton;
