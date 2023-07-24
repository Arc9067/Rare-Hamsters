import React from "react";
import mics1 from "./assets/mics.png";
import mics2 from "./assets/mics.png";
import mics3 from "./assets/mics.png";

const Mics = () => {
  return (
    <section className="py-14 w-full">
      <div className="container flex gap-7  flex-col">
        <h1 className="text-white text-4xl md:text-5xl font-normal leading-[67.20px] tracking-wide">
          TOKENOMICS
        </h1>

        <div className="grid w-full grid-cols-1 justify-between lg:grid-cols-3  items-center gap-8">
          <div className=" h-[442px] flex flex-col justify-center items-center relative bg-indigo-500 rounded-[30px]">
            <div className="text-white text-5xl font-normal leading-[67.20px] tracking-wide">
              Tax
            </div>
            <div className="left-[140px] top-[318px]  text-white text-5xl font-normal leading-[67.20px] tracking-wide">
              1%
            </div>
            <div className=" left-[92px] order-1 top-[43px]  justify-center items-center inline-flex">
              <img className="w-[8rem] " src={mics1} />
            </div>
          </div>
          <div className=" h-[442px] flex flex-col justify-center items-center relative bg-indigo-500 text-white rounded-[30px]">
            <div className="text-white text-5xl font-normal leading-[67.20px] tracking-wide">
              Tax
            </div>
            <div className="left-[140px] top-[318px]  text-white text-5xl font-normal leading-[67.20px] tracking-wide">
              1%
            </div>
            <div className=" left-[92px] order-1 top-[43px]  justify-center items-center inline-flex">
              <img className="w-[8rem] " src={mics1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mics;
