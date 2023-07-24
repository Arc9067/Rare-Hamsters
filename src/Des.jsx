import React from "react";

function Des() {
  return (
    <section className="py-14 w-full">
      <div className="container flex gap-7 justify-center items-center flex-col">
        <h1 className="text-5xl md:text-6xl uppercase text-center max-w-xl">
          win <span className="text-amber-500">any</span> race
        </h1>
        <div className="w-[300px] h-16 relative">
          <div className="w-[300px] h-[62px] left-0 top-[2px] absolute bg-indigo-200 rounded-full" />
          <div className="w-[296px] h-[60px] px-8 py-4 left-0 top-0 absolute bg-indigo-500 rounded-full shadow justify-center items-center gap-2.5 inline-flex">
            <div className="w-[216px] text-white text-xl font-normal leading-7 tracking-tight">
              DOWNLOAD NOW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Des;
