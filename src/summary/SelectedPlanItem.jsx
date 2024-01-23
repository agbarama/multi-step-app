import { Link } from "react-router-dom";
import styles from "./styles/selectedplanitem.module.css";

const SelectedPlanItem = ({ plan }) => {
  return (
    <div className={styles.selectedPlan}>
      <div className={styles.div}>
        <p className={styles.duration}>
          {plan.name} ({plan.duration})
        </p>
        <p className={styles.price}>
          ${plan.price} /{plan.priceDuration}
        </p>
      </div>
      <div>
        <Link to="/" className={styles.review}>
          change
        </Link>
      </div>
    </div>
  );
};

export default SelectedPlanItem;
