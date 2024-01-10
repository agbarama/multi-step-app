import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./form/Home";
import Contact from "./Contact";
import Plans from "./plan/Plans";
import { mPlans } from "./plan/data/plansArray";

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
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
