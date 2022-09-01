import React from "react";
import { useLocation } from "react-router-dom";

const AboutMe = () => {
  const location = useLocation();
  console.log(location.state);
  return <div> { import.meta.env.VITE_SECRET_KEY } </div>;
};

export default AboutMe;



// value ?? value null xa bhane
// value && value xa bhane
// conditon ? if true : if false;