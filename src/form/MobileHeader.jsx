import styles from "./styles/mobileheader.module.css";
import mobileBg from "../assets/backgrounds/bg-sidebar-mobile.svg";

const MobileHeader = ({
  togglePage1,
  togglePage2,
  togglePage3,
  togglePage4,
}) => {
  return (
    <div className={styles.mobileHeaderContainer}>
      <img className={styles.mobBg} src={mobileBg} alt="" />
      <div className={styles.mobileHeader}>
        <div className={styles.indicator}>
          <p
            className={`${styles.pageIndicator} ${
              togglePage1 ? styles.pageToggle : ""
            }`}
          >
            1
          </p>
          <p
            className={`${styles.pageIndicator} ${
              togglePage2 ? styles.pageToggle : ""
            }`}
          >
            2
          </p>
          <p
            className={`${styles.pageIndicator} ${
              togglePage3 ? styles.pageToggle : ""
            }`}
          >
            3
          </p>
          <p
            className={`${styles.pageIndicator} ${
              togglePage4 ? styles.pageToggle : ""
            }`}
          >
            4
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
