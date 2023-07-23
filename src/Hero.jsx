import React from "react";
import threeD from "./assets/3d.png";

const Hero = () => {
  return (
    <section className="py-32 w-full" id="hero">
      <div className="container flex justify-center items-center">
        <img src={threeD} alt="" className="w-9/12 md:w-fit" />
      </div>
    </section>
  );
};

export default Hero;
