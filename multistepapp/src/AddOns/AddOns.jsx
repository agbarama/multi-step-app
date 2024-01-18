import { useState } from "react";
import style from "../form/styles/home.module.css";
import Navbar from "../form/Navbar";
import styles from "./styles/addons.module.css";
import AddOnsList from "./AddOnsList";
import { useNavigate } from "react-router-dom";

const AddOns = ({ addOnsArray }) => {
  // Page indicator
  const [togglePage1, setTogglePage1] = useState(false);
  const [togglePage2, setTogglePage2] = useState(false);
  const [togglePage3, setTogglePage3] = useState(true);
  const [togglePage4, setTogglePage4] = useState(false);

  const navigate = useNavigate();

  const backButton = () => {
    navigate("/plan");
  };

  const nextButton = () => {
    navigate("/summary");
  };
  return (
    <div className={style.container}>
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

        <button className={styles.btnLight} onClick={backButton}>
          Go Back
        </button>
        <button className={styles.btnDark} onClick={nextButton}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AddOns;
