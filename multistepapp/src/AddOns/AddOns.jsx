import style from "../form/styles/home.module.css";
import Navbar from "../form/Navbar";
import styles from "./styles/addons.module.css";

const AddOns = () => {
  return (
    <div className={style.container}>
      <Navbar />

      <div className={styles.addOns}>
        <h1>Pick add-ons</h1>
        <p className={styles.p}>Add-ons help ehance your gaming experience.</p>
        <div className={styles.boxes}></div>

        <button className={styles.btnLight}>Go Back</button>
        <button className={styles.btnDark}>Next</button>
      </div>
    </div>
  );
};

export default AddOns;
