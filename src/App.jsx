import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Diveder from "./components/Navbar/Diveder";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Diveder/>
      <Hero/>
      <About/>
    </div>
  );
};

export default App;
