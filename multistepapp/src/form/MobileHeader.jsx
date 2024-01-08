import styles from "./styles/mobileheader.module.css";

const MobileHeader = () => {
  return (
    <div className={styles.mobileHeaderContainer}>
      <img
        className={styles.mob - bg}
        src="../img/backgrounds/bg-sidebar-mobile.svg"
        alt=""
      />
      <div className={styles.mobileHeader}>
        <div className={indicator}>
          <p className={styles.pageIndicator}>1</p>
          <p className={styles.pageIndicator}>2</p>
          <p className={styles.pageIndicator}>3</p>
          <p className={styles.pageIndicator}>4</p>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
