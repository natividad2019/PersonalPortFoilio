import React from 'react';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About"; // Import the About component
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
    </div>
  );
}

export default App;
