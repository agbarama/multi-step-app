import styles from "./styles/submitcontainer.module.css";
import thankYou from "../assets/icons/icon-thank-you.svg";

const SubmitContainer = ({ submit }) => {
  return (
    <div
      className={`${styles.submitContainer} ${
        submit ? styles.display : styles.hide
      }`}
    >
      <div className={styles.submitPage}>
        <img className={styles.submitIcon} src={thankYou} alt="" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to emai us at
          support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

export default SubmitContainer;
