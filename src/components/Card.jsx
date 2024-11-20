import React from "react";
import { dataDokter } from "../data";

const Card = () => {
  return (
    <div className="">
      {/* Wrapper */}
      <div className="flex flex-col md:flex md:flex-row">
        <div className="font-semibold text-[#4b4b4b] text-center mt-8 px-4 text-lg md:text-2xl md:flex md:items-center md:w-2/4">
          Mari Bertemu dengan Psikolog Profesional dari PsikoHub!
        </div>
        {/* Scroll Item */}
        <div className="w-screen overflow-x-scroll no-scrollbar">
          <div className="w-max flex">
            {/* Singgle Item */}
            {dataDokter.map((item) => (
              <div
                key={item.id}
                className="h-[70vh] flex flex-col items-center justify-around p-4"
              >
                <div className="bg-[#e0f2f1] rounded-t-md w-full">
                  {/* Image Container */}
                  <div className="relative flex-1">
                    <img
                      src={item.image}
                      alt={item.nama}
                      className="object-contain mt-5 px-5 w-60 h-60"
                    />
                  </div>
                  {/* Text Container */}
                  <div className="flex-1 flex flex-col gap-2 bg-[#55ad9b] text-[#4b4b4b] w-full p-2 rounded-b-md">
                    <h1 className="text-base font-bold uppercase w-80">{item.name}</h1>
                    <p>{item.specialization}</p>
                    <span className="text-xl font-bold">{item.rating}/5</span>
                    <button className="bg-[#e0f2f1] text-[#55ad9b] p-2 rounded-md font-semibold uppercase hover:bg-[#439080] hover:text-[#e0f2f1] ">
                      Buat Janji
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
