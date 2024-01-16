import styles from "./styles/addonslist.module.css";
import addOnsArray from "./data/addOnsArray";
import AddOnsItem from "./AddOnsItem";
import { useEffect, useState } from "react";

const AddOnsList = () => {
  // localstorage state
  const savedAddOns = JSON.parse(localStorage.getItem("summaryAddOns"));
  const [addOns, setAddOns] = useState(savedAddOns || []);

  const toggleAddOn = (clickedAddOn) => {
    setAddOns((data) => {
      // Remove the addon from the list
      if (data.find((addOn) => addOn.name === clickedAddOn.name)) {
        return data.filter((addOn) => addOn.name !== clickedAddOn.name);
      }
      // Add the addon to the list
      else {
        return [...data, clickedAddOn];
      }
    });
  };

  // add to localstorage on change of addOns
  useEffect(() => {
    localStorage.setItem("summaryAddOns", JSON.stringify(addOns));
  }, [addOns]);

  return (
    <div className={styles.boxes}>
      {addOnsArray.map((addOn, i) => (
        <AddOnsItem
          key={i}
          addOn={addOn}
          addOns={addOns}
          onClick={() => toggleAddOn(addOn)}
        />
      ))}
    </div>
  );
};

export default AddOnsList;
