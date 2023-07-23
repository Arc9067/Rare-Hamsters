import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Des from "./Des";
import About from "./About";
import Mics from "./Mics";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-Ultra">
      <Header />
      <Hero />
      <Des />
      <About />
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
