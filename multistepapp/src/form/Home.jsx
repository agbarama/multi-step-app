import { useState } from "react";
import styles from "./styles/home.module.css";
import MobileHeader from "./MobileHeader";
import Navbar from "./Navbar";
import Form from "./Form";
import MobileButton from "./MobileButton";

const Home = () => {
  const [togglePage1, setTogglePage1] = useState(true);
  const [togglePage2, setTogglePage2] = useState(false);
  const [togglePage3, setTogglePage3] = useState(false);
  const [togglePage4, setTogglePage4] = useState(false);

  return (
    <div className={styles.container}>
      {/* <MobileHeader /> */}
      <Navbar
        togglePage1={togglePage1}
        togglePage2={togglePage2}
        togglePage3={togglePage3}
        togglePage4={togglePage4}
      />
      <Form />
      <MobileButton />
    </div>
  );
};

export default Home;
