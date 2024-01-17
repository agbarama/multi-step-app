import style from "../form/styles/home.module.css";
import Navbar from "../form/Navbar";
import styles from "./styles/addons.module.css";
import AddOnsList from "./AddOnsList";
import { useNavigate } from "react-router-dom";

const AddOns = ({ addOnsArray }) => {
  const navigate = useNavigate();

  const backButton = () => {
    navigate("/plan");
  };

  const nextButton = () => {
    navigate("/summary");
  };
  return (
    <div className={style.container}>
      <Navbar />

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
