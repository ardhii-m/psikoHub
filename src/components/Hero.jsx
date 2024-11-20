import React from "react";
import Dok2 from "/assets/Dok2.png"

const Hero = () => {
  return (
    <>
      <div className=" flex flex-col bg-[#d8efd3] md:flex-row">
        <div className="text-center gap-4 p-12 md:p-10 md:text-start md:w-[50%]">
          <h1 className="text-[#3a4d39] text-2xl py-3 font-bold md:text-4xl md:py-6 lg:text-6xl lg:py-12">Welcome to PsikoHub!</h1>
          <p className="text-xs font-normal md:text-base lg:text-xl">
            Kami percaya bahwa setiap orang berhak mendapatkan dukungan dan
            perhatian penuh. Temui Psikolog profesional kami yang siap membantu
            Anda dalam mengatasi kecemasan, stres, dan berbagai tantangan
            lainya.
          </p>
        </div>
        <div className="flex justify-center md:w-[50%] ">
          <img src={Dok2} className="md:w-full" />
        </div>
      </div>
    </>
  );
};

export default Hero;
