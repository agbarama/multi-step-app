import SelectedAddOnsItem from "./SelectedAddOnsItem";

const SelectedAddOnsList = ({ savedAddOns }) => {
  return (
    <div>
      {savedAddOns.map((addOn, i) => (
        <SelectedAddOnsItem key={i} addOn={addOn} />
      ))}
    </div>
  );
};
export default SelectedAddOnsList;
