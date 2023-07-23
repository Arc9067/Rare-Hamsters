import React from "react";
import about from "./assets/about.png";

const About = () => {
  return (
    <section className="py-14 w-full">
      <div className="container flex gap-7 justify-center items-center flex-col">
        <img src={about} alt="" className="w-max" />
        <div className="text-center text-cyan-400 md:text-xl font-normal leading-10 max-w-4xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sed
          temporibus labore quaerat recusandae deserunt, vero rem maiores fugit
          tempora expedita quasi voluptatum consequuntur ipsa, quia repellat
          nobis reiciendis, libero in odit! Voluptatibus atque veritatis saepe
          corrupti. Mollitia, reprehenderit excepturi?
        </div>
      </div>
    </section>
  );
};

export default About;
