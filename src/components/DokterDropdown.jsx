import React from "react";
import { dataDokter } from "../data";

const DokterDropdown = () => {
  return (
    <div
      className=" absolute bg-[#55ad9b] text-[#000] px-4 py-2 rounded-b-md w-full h-[20%] overflow-y-auto mt-14 z-10"
      style={{ width: "100%", height: "30vh" }}
    >
      {dataDokter.map((item) => (
        <div key={item.id} className="w-max flex flex-row mt-4 cursor-pointer">
          <div className="flex justify-start">
            <img
              src={item.image}
              alt={item.nama}
              className="w-28 h-44 flex flex-shrink-0"
            />
          </div>
          <div className="flex flex-col justify-center w-24 gap-2 ml-2 md:w-52">
            <p className="text-xs font-semibold md:text-base">{item.name}</p>
            <p className="text-sm ">{item.rating}/5</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DokterDropdown;
