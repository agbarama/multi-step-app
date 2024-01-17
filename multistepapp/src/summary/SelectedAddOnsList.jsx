import SelectedAddOnsItem from "./SelectedAddOnsItem";

const SelectedAddOnsList = () => {
  const savedAddOns = JSON.parse(localStorage.getItem("summaryAddOns"));

  return (
    <div>
      {savedAddOns.map((addOn, i) => (
        <SelectedAddOnsItem key={i} addOn={addOn} />
      ))}
    </div>
  );
};
export default SelectedAddOnsList;
