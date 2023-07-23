import React from "react";
import mics1 from "./assets/mics1.png";
import mics2 from "./assets/mics2.png";
import mics3 from "./assets/mics3.png";

const Mics = () => {
  return (
    <section className="py-14 w-full">
      <div className="container flex gap-7  flex-col">
        <h1 className="text-white text-4xl md:text-5xl font-normal leading-[67.20px] tracking-wide">
          TOKENOMICS
        </h1>

        <div className="grid w-full grid-cols-1 lg:grid-cols-3 justify-center items-center gap-8">
          <div className=" h-[442px] flex justify-center items-center relative bg-amber-300 rounded-[30px]">
            <div className="left-[124px] top-[251px] absolute text-black text-5xl font-normal leading-[67.20px] tracking-wide">
              Tax
            </div>
            <div className="left-[140px] top-[318px] absolute text-black text-5xl font-normal leading-[67.20px] tracking-wide">
              5%
            </div>
            <div className=" left-[92px] top-[43px] absolute justify-center items-center inline-flex">
              <img className="" src={mics1} />
            </div>
          </div>
          <div className=" h-[442px] flex justify-center items-center relative bg-blue-500 rounded-[30px]">
            <div className="left-[124px] top-[251px] absolute text-white text-5xl font-normal leading-[67.20px] tracking-wide">
              Tax
            </div>
            <div className="left-[140px] top-[318px] absolute text-white text-5xl font-normal leading-[67.20px] tracking-wide">
              5%
            </div>
            <div className=" left-[92px] top-[43px] absolute justify-center items-center inline-flex">
              <img className="" src={mics2} />
            </div>
          </div>
          <div className=" h-[442px] flex justify-center items-center relative bg-rose-400 rounded-[30px]">
            <div className="left-[124px] top-[251px] absolute text-black text-5xl font-normal leading-[67.20px] tracking-wide">
              Tax
            </div>
            <div className="left-[140px] top-[318px] absolute text-black text-5xl font-normal leading-[67.20px] tracking-wide">
              5%
            </div>
            <div className=" left-[92px] top-[43px] absolute justify-center items-center inline-flex">
              <img className="" src={mics3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mics;
