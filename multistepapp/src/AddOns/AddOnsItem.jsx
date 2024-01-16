import { useEffect, useState } from "react";
import styles from "./styles/addonsitem.module.css";

const AddOnsItem = ({ addOn, addOns, ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);

  // setting toggle state to true
  useEffect(() => {
    setIsChecked(
      addOns.find((item) => item.name === addOn.name) ? true : false
    );
  }, [addOns]);

  return (
    <div
      className={`${styles.box} ${isChecked ? styles.toggleBox : ""}`}
      {...rest}
    >
      <input
        className={styles.input}
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          rest?.onClick;
        }}
      />
      <div className={styles.spaceBetween}>
        <div>
          <p className={styles.addOnsType}>{addOn.name}</p>
          <p className={styles.addOnsText}>{addOn.access}</p>
        </div>
        <p className={styles.price}>
          +${addOn.price}/{addOn.duration}
        </p>
      </div>
    </div>
  );
};

export default AddOnsItem;
