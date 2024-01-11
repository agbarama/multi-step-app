import styles from "./styles/addonslist.module.css";
import addOnsArray from "./data/addOnsArray";
import AddOnsItem from "./AddOnsItem";

const AddOnsList = () => {
  return (
    <div className={styles.boxes}>
      {addOnsArray.map((addOn) => (
        <AddOnsItem key={addOn.name} addOn={addOn} />
      ))}
    </div>
  );
};

export default AddOnsList;
