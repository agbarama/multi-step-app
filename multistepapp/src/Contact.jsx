import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={handleClick}>Back to about</button>
    </div>
  );
};

export default Contact;
