import SelectedPlanItem from "./SelectedPlanItem";

const SelectedPlanList = ({ savedPlans }) => {
  return (
    <div>
      {savedPlans.map((plan, i) => (
        <SelectedPlanItem key={i} plan={plan} />
      ))}
    </div>
  );
};

export default SelectedPlanList;
