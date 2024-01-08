import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

export default Home;
