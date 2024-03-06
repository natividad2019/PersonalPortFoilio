import React from "react";
import Experience from "./components/Experience";
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
      <Experience />
      <SocialLinks />
    </div>
  );
}

export default App;
