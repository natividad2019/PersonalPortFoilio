import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About"; // Import the About component
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
