import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./form/Home";
import Plans from "./plan/Plans";
import { mPlans } from "./plan/data/plansArray";
import AddOns from "./AddOns/AddOns";

const RoutesContainer = () => {
  const [plansArray, setPlansArray] = useState(mPlans);
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
        <Route path="/ads" element={<AddOns />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
