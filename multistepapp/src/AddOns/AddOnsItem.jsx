import styles from "./styles/addonsitem.module.css";

const AddOnsItem = ({ addOn }) => {
  return (
    <div className={styles.box}>
      <input className={styles.input} type="checkbox" name="" id="checkbox" />
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
