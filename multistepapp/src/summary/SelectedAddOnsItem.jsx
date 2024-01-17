import styles from "./styles/selectedaddonsitem.module.css";

const SelectedAddOnsItem = ({ addOn }) => {
  return (
    <div className={styles.div}>
      <p className={styles.access}>{addOn.name}</p>
      <p className={styles.accessPrice}>
        +${addOn.price}/{addOn.duration}
      </p>
    </div>
  );
};

export default SelectedAddOnsItem;
