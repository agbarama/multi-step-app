import { useState } from "react";
import Navbar from "../form/Navbar";
import styles from "./styles/summary.module.css";
import SummaryContainer from "./SummaryContainer";
import SubmitContainer from "./SubmitContainer";

const Summary = ({ plansArray }) => {
  const [submit, setSubmit] = useState(false);
  return (
    <div className={styles.container}>
      <Navbar />
      <SummaryContainer
        plansArray={plansArray}
        submit={submit}
        setSubmit={setSubmit}
      />
      <SubmitContainer submit={submit} setSubmit={setSubmit} />
    </div>
  );
};

export default Summary;
