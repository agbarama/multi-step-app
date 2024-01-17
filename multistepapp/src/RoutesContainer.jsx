import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./form/Home";
import Plans from "./plan/Plans";
import { mPlans, yPlans } from "./plan/data/plansArray";
import AddOns from "./AddOns/AddOns";
import Summary from "./summary/Summary";
import { monAddOnsArray, yearlyAddOnsArray } from "./AddOns/data/addOnsArray";

const RoutesContainer = () => {
  const [plansArray, setPlansArray] = useState(mPlans);
  const [addOnsArray, setAddOnsArray] = useState(monAddOnsArray);

  useEffect(() => {
    setAddOnsArray(plansArray === yPlans ? yearlyAddOnsArray : monAddOnsArray);
  }, [plansArray]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/plan"
          element={
            <Plans plansArray={plansArray} setPlansArray={setPlansArray} />
          }
        ></Route>
        <Route
          path="/ads"
          element={<AddOns addOnsArray={addOnsArray} />}
        ></Route>
        <Route
          path="/summary"
          element={<Summary plansArray={plansArray} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
