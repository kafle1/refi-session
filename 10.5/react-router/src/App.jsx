import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.page";
import AboutMe from "./components/AboutMe.page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
