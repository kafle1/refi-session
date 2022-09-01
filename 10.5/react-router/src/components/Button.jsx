import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ path }) => {
  const myDetails = {
    name: "Niraj",
    age: "18",
    bio: " Noice boy",
  };
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(path, { state: myDetails })}>
      About me
    </button>
  );
};

export default Button;
