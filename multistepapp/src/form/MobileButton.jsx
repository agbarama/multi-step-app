import styles from "./styles/mobilebutton.module.css";

const MobileButton = () => {
  return (
    <div>
      <div className={styles.mobileButtons}>
        <button className={styles.mobNextBtn}>Next</button>
      </div>
    </div>
  );
};

export default MobileButton;
