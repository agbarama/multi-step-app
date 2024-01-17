import SelectedPlanItem from "./SelectedPlanItem";
import styles from "./styles/summaryplans.module.css";

const SelectedPlanList = ({ savedPlans }) => {
  console.log(savedPlans);
  return (
    <div>
      {savedPlans.map((plan, i) => (
        <SelectedPlanItem key={i} plan={plan} />
      ))}
    </div>
  );
};

export default SelectedPlanList;
