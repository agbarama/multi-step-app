import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./form/Home";
import Plans from "./plan/Plans";
import { mPlans, yPlans } from "./plan/data/plansArray";
import AddOns from "./AddOns/AddOns";
import Summary from "./summary/Summary";
import { monAddOnsArray, yearlyAddOnsArray } from "./AddOns/data/addOnsArray";

const RoutesContainer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", number: "" });

  const [plansArray, setPlansArray] = useState(mPlans);
  const [addOnsArray, setAddOnsArray] = useState(monAddOnsArray);
  const [toggleDuration, setToggleDuration] = useState(false);

  useEffect(() => {
    // Set the location to the home page on component mount
    window.location.pathname === "/" || (window.location.href = "/");
  }, []);

  useEffect(() => {
    setAddOnsArray(plansArray === yPlans ? yearlyAddOnsArray : monAddOnsArray);
  }, [plansArray]);

  useEffect(() => {
    setToggleDuration(plansArray === yPlans ? true : false);
  }, [plansArray]);

  const handleSubmit = (e) => {
    // e.preventDefault();
    const submitedInputs = formData;
    console.log(submitedInputs);

    setFormData({ name: "", email: "", number: "" });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
            />
          }
        ></Route>
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
          element={
            <Summary
              plansArray={plansArray}
              toggleDuration={toggleDuration}
              onSubmit={handleSubmit}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
