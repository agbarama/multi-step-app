import styles from "./styles/mobilebutton.module.css";

const MobileButton = () => {
  return (
    <div>
      <div className={styles.mobileButtons}>
        <button className={styles.nextBtn}>Next</button>
        <button className={styles.btnLight}>Back</button>
        <button className={styles.btnDark}>Next</button>
        <button className={styles.sumBtn}>Confirm</button>
      </div>
    </div>
  );
};

export default MobileButton;
