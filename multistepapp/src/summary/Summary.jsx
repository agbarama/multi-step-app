import { useState } from "react";
import Navbar from "../form/Navbar";
import styles from "./styles/summary.module.css";
import SummaryContainer from "./SummaryContainer";
import SubmitContainer from "./SubmitContainer";

const Summary = () => {
  // setSummaryPlan(JSON.parse(localStorage.getItem("summaryPlan")));
  const summaryPlan = JSON.parse(localStorage.getItem("summaryPlan"));
  const summaryAddOns = JSON.parse(localStorage.getItem("summaryAddOns"));

  console.log(summaryPlan.name);

  return (
    <div className={styles.container}>
      <Navbar />
      <SummaryContainer />
      {/* <SubmitContainer /> */}
    </div>
  );
};

export default Summary;
