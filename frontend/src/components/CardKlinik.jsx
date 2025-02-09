import React, { useState, useEffect } from "react";
import axios from "axios";

const CardKlinik = () => {
  const [kliniks, setKlinik] = useState([]);

  useEffect(() => {
    getKliniks();
  }, []);

  const getKliniks = async () => {
    const response = await axios.get("http://localhost:9000/kliniks");
    console.log(response.data);
    setKlinik(response.data);
  };

  return (
    <div className="">
      {/* Wrapper */}
      <div className="flex flex-col md:flex md:flex-row">
        <div className="font-semibold text-[#000] text-center justify-center items-center mt-8 px-4 text-lg md:text-2xl md:flex md:items-center md:w-2/4">
          Cari Klinik PsikoHub didekatmu!
        </div>
        {/* Scroll Item */}
        <div className="w-screen h-screen overflow-x-scroll no-scrollbar">
          <div className="w-max flex">
            {/* Singgle Item */}
            {kliniks.map(
              (klinik, index) => (
                console.log(
                  "Klinik Image URL:",
                  `http://localhost:9000${klinik.imgUrl}`
                ),
                (
                  <div
                    key={klinik.id}
                    className="h-[70vh] flex flex-col items-center justify-around p-4"
                  >
                    <div className="bg-[#e0f2f1] rounded-t-md w-[90%]">
                      {/* Image Container */}
                      <div className="relative flex-1">
                        <img
                          src={`http://localhost:9000${klinik.imgUrl}`}
                          alt={klinik.name}
                          className="object-cover w-80 h-80 rounded-t-md"
                        />
                      </div>
                      {/* Text Container */}
                      <div className="flex-1 flex flex-col gap-2 bg-[#55ad9b] text-[#000] w-full p-2 rounded-b-md">
                        <h1 className="text-base font-bold uppercase w-80">
                          {klinik.name}
                        </h1>
                        <p>{klinik.location}</p>
                        <span className="text-xl font-bold">
                          {klinik.contact}
                        </span>
                        <button
                          className="bg-[#e0f2f1] text-[#55ad9b] p-2 rounded-md font-semibold uppercase hover:bg-[#439080] hover:text-[#e0f2f1]"
                          onClick={() => window.open(klinik.map, "_blank")}
                        >
                          Lihat Peta
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

export default CardKlinik;
