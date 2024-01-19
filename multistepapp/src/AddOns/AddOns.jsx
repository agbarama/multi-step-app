import { useState } from "react";
import style from "../form/styles/home.module.css";
import Navbar from "../form/Navbar";
import MobileHeader from "../form/MobileHeader";
import MobileButton from "../form/MobileButton";
import styles from "./styles/addons.module.css";
import AddOnsList from "./AddOnsList";
import { useNavigate } from "react-router-dom";

const AddOns = ({ addOnsArray }) => {
  // Page indicator
  const [togglePage3, setTogglePage3] = useState(true);

  // Display mobile button
  const [addOnButton, setAddOnButton] = useState(true);

  const navigate = useNavigate();

  const back = () => {
    navigate("/plan");
  };

  const next = () => {
    navigate("/summary");
  };
  return (
    <div className={styles.container}>
      <MobileHeader togglePage3={togglePage3} />
      <Navbar togglePage3={togglePage3} />

      <div className={styles.addOns}>
        <h1 className={styles.h1}>Pick add-ons</h1>
        <p className={styles.p}>Add-ons help ehance your gaming experience.</p>
        <AddOnsList addOnsArray={addOnsArray} />

        <button className={styles.btnLight} onClick={back}>
          Go Back
        </button>
        <button className={styles.btnDark} onClick={next}>
          Next Step
        </button>
        <MobileButton
          addOnButton={addOnButton}
          addOnBack={back}
          addOnNext={next}
        />
      </div>
    </div>
  );
};

export default AddOns;
