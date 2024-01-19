import MobileHeader from "../form/MobileHeader";
import MobileButton from "../form/MobileButton";
import { useState } from "react";
import Navbar from "../form/Navbar";
import styles from "./styles/summary.module.css";
import SummaryContainer from "./SummaryContainer";
import SubmitContainer from "./SubmitContainer";

const Summary = ({ plansArray, toggleDuration }) => {
  // Page indicator
  const [togglePage4, setTogglePage4] = useState(true);

  const [submit, setSubmit] = useState(false);
  return (
    <div className={styles.container}>
      <MobileHeader togglePage4={togglePage4} />
      <Navbar togglePage4={togglePage4} />
      {!submit ? (
        <SummaryContainer
          plansArray={plansArray}
          toggleDuration={toggleDuration}
          submit={submit}
          setSubmit={setSubmit}
        />
      ) : (
        <SubmitContainer submit={submit} setSubmit={setSubmit} />
      )}
      {/* <SummaryContainer
         plansArray={plansArray}
         submit={submit}
         setSubmit={setSubmit}
      /> */}
      {/* <MobileButton /> */}
      {/* <SubmitContainer submit={submit} setSubmit={setSubmit} /> */}
    </div>
  );
};

export default Summary;
