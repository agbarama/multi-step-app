import { useState } from "react";
import styles from "./styles/home.module.css";
import MobileHeader from "./MobileHeader";
import Navbar from "./Navbar";
import Form from "./Form";
import MobileButton from "./MobileButton";

const Home = ({ formData, setFormData, handleSubmit }) => {
  // Page indicator
  const [togglePage1, setTogglePage1] = useState(true);

  // Mobile buttons
  const [formButton, setFormButton] = useState(false);
  const [backButton, setBackButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const [addOnBackButton, setAddOnBackButton] = useState(false);
  const [addOnNextButton, setAddonNextButton] = useState(false);
  const [confirmButton, setConfirmButton] = useState(false);

  return (
    <div>
      <MobileHeader togglePage1={togglePage1} />
      <div className={styles.container}>
        <Navbar togglePage1={togglePage1} />
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
        <MobileButton
          formButton={formButton}
          backButton={backButton}
          nextButton={nextButton}
          addOnBackButton={addOnBackButton}
          addOnBackNextButton={addOnNextButton}
          confirmButton={confirmButton}
        />
      </div>
    </div>
  );
};

export default Home;
