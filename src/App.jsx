import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Diveder from "./components/Navbar/Diveder";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Diveder/>
      <Hero/>
      <About/>
      <Skill/>
    </div>
  );
};

export default App;
