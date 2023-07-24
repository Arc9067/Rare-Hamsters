import React from "react";
import about from "./assets/about.png";

const About = () => {
  return (
    <section className="py-14 w-full">
      <div className="container flex gap-7 justify-center items-center flex-col">
        <img src={about} alt="" className="w-max" />
        <div className="text-center text-indigo-400 md:text-xl font-normal leading-10 max-w-4xl">
          Use rarity meme cards on your favorite DeFi racing game “HamsterRace”.
          Our one-of-a-kind Rare Hamster rarity card consists of an abstract
          canvas followed by a vibrant palette. Our 3d design was crafted this
          way so any user can spot even the slightest amount of detail from
          within the card. In fact, our designed background, hamsters and rarity
          card was made from the best designers in the game!
        </div>
      </div>
    </section>
  );
};

export default About;
