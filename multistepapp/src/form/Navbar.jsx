import styles from "./styles/home.module.css";
import backgroundImage from "../assets/backgrounds/bg-sidebar-desktop.svg";

const Navbar = () => {
  return (
    <div>
      <div className={styles.sideBar}>
        <img className={styles.deskBg} src={backgroundImage} alt="" />
        <div className={styles.stages}>
          <div className={styles.steps}>
            <p className={styles.pageIndicator}>1</p>
            <div>
              <p className={styles.step}>STEP 1</p>
              <p className={styles.stepText}>YOUR INFO</p>
            </div>
          </div>

          <div className={styles.steps}>
            <p className={styles.pageIndicator}>2</p>
            <div>
              <p className={styles.step}>STEP 2</p>
              <p className={styles.stepText}>SELECT PLAN</p>
            </div>
          </div>
          <div className={styles.steps}>
            <p className={styles.pageIndicator}>3</p>
            <div>
              <p className={styles.step}>STEP 3</p>

              <p className={styles.stepText}>ADD-ONS</p>
            </div>
          </div>
          <div className={styles.steps}>
            <p className={styles.pageIndicator}>4</p>
            <div>
              <p className={styles.step}>STEP 1</p>
              <p className={styles.stepText}>SUMMARY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
