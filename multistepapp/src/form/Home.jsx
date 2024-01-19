import { useState } from "react";
import styles from "./styles/home.module.css";
import MobileHeader from "./MobileHeader";
import Navbar from "./Navbar";
import Form from "./Form";
import MobileButton from "./MobileButton";

const Home = () => {
  // Page indicators
  const [togglePage1, setTogglePage1] = useState(true);
  const [togglePage2, setTogglePage2] = useState(false);
  const [togglePage3, setTogglePage3] = useState(false);
  const [togglePage4, setTogglePage4] = useState(false);

  // Mobile buttons
  const [formButton, setFormButton] = useState(true);
  const [backButton, setBackButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const [addOnBackButton, setAddOnBackButton] = useState(false);
  const [addOnNextButton, setAddonNextButton] = useState(false);
  const [confirmButton, setConfirmButton] = useState(false);

  return (
    <div className={styles.container}>
      <MobileHeader />
      <Navbar
        togglePage1={togglePage1}
        togglePage2={togglePage2}
        togglePage3={togglePage3}
        togglePage4={togglePage4}
      />
      <Form />
      <MobileButton
        formButton={formButton}
        backButton={backButton}
        nextButton={nextButton}
        addOnBackButton={addOnBackButton}
        addOnBackNextButton={addOnNextButton}
        confirmButton={confirmButton}
      />
    </div>
  );
};

export default Home;
