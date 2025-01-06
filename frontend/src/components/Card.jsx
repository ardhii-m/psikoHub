import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [dokters, setDokter] = useState([]);

  useEffect(() => {
    getDokters();
  }, []);

  const getDokters = async () => {
    const response = await axios.get("http://localhost:9000/dokters");
    console.log(response.data);
    setDokter(response.data);
  };

  return (
    <div className="">
      {/* Wrapper */}
      <div className="flex flex-col md:flex md:flex-row">
        <div className="font-semibold text-[#000] text-center mt-8 px-4 text-lg md:text-2xl md:flex md:items-center md:w-2/4">
          Mari Bertemu dengan Psikolog Profesional dari PsikoHub!
        </div>
        {/* Scroll Item */}
        <div className="w-screen overflow-x-scroll no-scrollbar">
          <div className="w-max flex">
            {/* Singgle Item */}
            {dokters.map(
              (dokter, index) => (
                console.log(
                  "Dokter Image URL:",
                  `http://localhost:9000${dokter.imgUrl}`
                ),
                (
                  <div
                    key={dokter.id || index}
                    className="h-[70vh] flex flex-col items-center justify-around p-4"
                  >
                    <div className="bg-[#e0f2f1] rounded-t-md w-[90%]">
                      {/* Image Container */}
                      <div className="relative flex-1 flex justify-center">
                        <img
                          src={`http://localhost:9000${dokter.imgUrl}`}
                          alt={dokter.nama}
                          className="object-fit w-80 h-[45vh] rounded-t-md"
                        />
                      </div>
                      {/* Text Container */}
                      <div className="flex-1 flex flex-col gap-2 bg-[#55ad9b] text-[#000] w-full p-2 rounded-b-md">
                        <h1 className="text-base font-bold uppercase w-80">
                          {dokter.name}
                        </h1>
                        <p>{dokter.specialization}</p>
                        <span className="text-xl font-bold">
                          {dokter.rating}/5
                        </span>
                        <button className="bg-[#e0f2f1] text-[#55ad9b] p-2 rounded-md font-semibold uppercase hover:bg-[#439080] hover:text-[#e0f2f1] ">
                          Buat Janji
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
