import styles from "./styles/durationtoggle.module.css";

const DurationToggle = () => {
  return (
    <div className={styles.durationSwitch}>
      <p className={styles.monDur}>Monthly</p>
      <div className={styles.switch}>
        <div className={styles.switchIndicator}></div>
      </div>
      <p className={styles.yrDur}>Yearly</p>
    </div>
  );
};

export default DurationToggle;
