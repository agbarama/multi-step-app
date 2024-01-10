import styles from "./styles/planitem.module.css";

const PlanItem = ({ plan }) => {
  return (
    <div className={styles.box} data-plan-name={plan.name}>
      <img className={styles.icons} src={plan.icon} alt="" />
      <div>
        <p className={styles.planType}>{plan.name}</p>
        <p className={styles.price}>
          ${plan.price}/{plan.priceDuration}
        </p>
        <p className={styles.bonus}>{plan.bonus}</p>
      </div>
    </div>
  );
};

export default PlanItem;
