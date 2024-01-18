import styles from "./styles/mobileheader.module.css";
import mobileBg from "../assets/backgrounds/bg-sidebar-mobile.svg";

const MobileHeader = () => {
  return (
    <div className={styles.mobileHeaderContainer}>
      <img className={styles.mobBg} src={mobileBg} alt="" />
      <div className={styles.mobileHeader}>
        <div className={styles.indicator}>
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
