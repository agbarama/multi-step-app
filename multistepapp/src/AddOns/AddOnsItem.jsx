import { useEffect, useState } from "react";
import styles from "./styles/addonsitem.module.css";

const AddOnsItem = ({ addOn }) => {
  const [toggled, setToggled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // summary addOn array to save clicked addOns to localstorage
  const [summaryAddOn, setSummaryAddOn] = useState(
    () => JSON.parse(localStorage.getItem("summaryAddOn")) || []
  );

  // To get saved item on refresh
  useEffect(() => {
    const savedAddOn = localStorage.getItem("summaryAddOn");
    if (savedAddOn) {
      setSummaryAddOn(JSON.parse(savedAddOn));
    }
  }, []);

  // function to toggle between checkbox input
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  // function to toggle the addon box
  const handleClick = (clickedAddOn) => {
    setToggled(!toggled);
    setIsChecked(!isChecked);

    const newAdOn = { addOnName: clickedAddOn };
    console.log(newAdOn);

    setSummaryAddOn([...summaryAddOn, newAdOn]);
    console.log(summaryAddOn);
  };

  // To save the addOns to localstorage when ever it changes
  useEffect(() => {
    localStorage.setItem("summaryAddOn", JSON.stringify(summaryAddOn));
  }, [summaryAddOn]);

  return (
    <div
      className={`${styles.box} ${toggled ? styles.toggleBox : ""}`}
      onClick={() => handleClick(addOn.name)}
    >
      <input
        className={styles.input}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheck}
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
