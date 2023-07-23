import React from "react";

function Des() {
  return (
    <section className="py-14 w-full">
      <div className="container flex gap-7 justify-center items-center flex-col">
        <h1 className="text-5xl md:text-6xl uppercase text-center max-w-xl">
          get <span className="text-indigo-500">money</span> now play free
        </h1>
        <div className="w-[300px] h-16 relative">
          <div className="w-[300px] h-[62px] left-0 top-[2px] absolute bg-orange-400 rounded-full" />
          <div className="w-[296px] h-[60px] px-8 py-4 left-0 top-0 absolute bg-amber-400 rounded-full shadow justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-xl font-normal leading-7 tracking-tight">
              BUY NOW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Des;