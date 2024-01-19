import { useState } from "react";
import style from "../form/styles/home.module.css";
import Navbar from "../form/Navbar";
import MobileHeader from "../form/MobileHeader";
import MobileButton from "../form/MobileButton";
import styles from "./styles/addons.module.css";
import AddOnsList from "./AddOnsList";
import { useNavigate } from "react-router-dom";

const AddOns = ({ addOnsArray }) => {
  // Page indicators
  const [togglePage1, setTogglePage1] = useState(false);
  const [togglePage2, setTogglePage2] = useState(false);
  const [togglePage3, setTogglePage3] = useState(true);
  const [togglePage4, setTogglePage4] = useState(false);

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
      <MobileHeader />
      <Navbar
        togglePage1={togglePage1}
        togglePage2={togglePage2}
        togglePage3={togglePage3}
        togglePage4={togglePage4}
      />

      <div className={styles.addOns}>
        <h1 className={styles.h1}>Pick add-ons</h1>
        <p className={styles.p}>Add-ons help ehance your gaming experience.</p>
        <AddOnsList addOnsArray={addOnsArray} />

        <button className={styles.btnLight} onClick={back}>
          Go Back
        </button>
        <button className={styles.btnDark} onClick={next}>
          Next
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
