import React, { useState, useEffect } from "react";
import axios from "axios";

const DokterDropdown = ({ dokter, onSelect }) => {
  const [localDokters, setLocalDokter] = useState([]);

  useEffect(() => {
    getDokters();
  }, []);

  const getDokters = async () => {
    const response = await axios.get("http://localhost:9000/dokters");
    console.log(response.data);
    setLocalDokter(response.data);
  };

  return (
    <div
      className=" absolute bg-[#55ad9b] text-[#000] px-4 py-2 rounded-b-md w-full h-[20%] overflow-y-auto mt-14 z-10"
      style={{ width: "100%", height: "30vh" }}
    >
      {localDokters.map((dokter) => (
        <div
          key={dokter.id}
          className="w-max flex flex-row mt-4 cursor-pointer"
          onClick={() => onSelect(dokter.name)}
        >
          <div className="flex justify-start">
            <img
              src={`http://localhost:9000${dokter.imgUrl}`}
              alt={dokter.name}
              className="w-28 h-44 flex flex-shrink-0 rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center w-24 gap-2 ml-2 md:w-52">
            <p className="text-xs font-semibold md:text-base">{dokter.name}</p>
            <p className="text-sm ">{dokter.rating}/5</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DokterDropdown;
