import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={handleClick}>Back to home</button>
    </div>
  );
};

export default About;
