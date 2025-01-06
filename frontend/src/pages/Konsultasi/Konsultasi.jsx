import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import FeatherIcon from "feather-icons-react";
import DokterDropdown from "../../components/DokterDropdown";

const Konsultasi = () => {
  const [openDokterDropdown, setOpenDokterDropdown] = useState(false);
  const [selectedDokter, setSelectedDokter] = useState("");
  const [dokter, setDokter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDokters = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:9000/dokters");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDokter(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDokters();
  }, []);

  const handleSelectorDokter = (dokter) => {
    setSelectedDokter(dokter);
    setOpenDokterDropdown(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#edfff6] text-[#4b4b4b] h-[calc(100vh-6rem)] md:h-[calc(100vh-6.5rem)]">
        <h1 className="text-center text-2xl font-semibold py-6">
          Pendaftaran Konsultasi Online
        </h1>
        <div className="md:flex md:flex-row md:justify-around md:gap-4 md:mt-8">
          {/* Kiri */}
          <div className="flex justify-center mt-4 md:w-full">
            <form className="flex flex-col justify-center gap-4 w-[70%] md:gap-12">
              <div className="flex flex-col">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Nama"
                  className="border border-[#55AD9B] rounded-md p-2"
                />
              </div>
              <div className="flex flex-col">
                <label>No WhatsApp</label>
                <input
                  type="text"
                  placeholder="No. Telp"
                  className="border border-[#55AD9B] rounded-md p-2"
                />
              </div>
              <div className="flex flex-col relative">
                <label className="">Dokter</label>
                <div className="flex flex-col relative justify-center">
                  <FeatherIcon
                    icon="chevron-down"
                    className="absolute right-3 top-2/4 transform -translate-y-1/2 bg-[#55AD9B] text-gray-500 rounded-lg cursor-pointer items-center justify-center active:text-[#edfff6] active:bg-[#449081]"
                    onClick={() => setOpenDokterDropdown((prev) => !prev)}
                  />
                  <input
                    className="border border-[#55AD9B] rounded-md p-2"
                    placeholder="Pilih Dokter"
                    value={selectedDokter}
                  />
                </div>
                {openDokterDropdown && (
                  <DokterDropdown
                    doctors={dokter}
                    onSelect={handleSelectorDokter}
                  />
                )}
                {loading && <p className="text-gray-500 mt-2">Loading...</p>}
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </div>
            </form>
          </div>

          {/* Kanan */}
          <div className="flex justify-center items-center mt-4 md:w-full md:mt-8">
            <form className="flex flex-col justify-center gap-4 w-[70%] md:gap-12">
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  className="border border-[#55AD9B] rounded-md p-2"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Tanggal Konsultasi</label>
                <input
                  className="border border-[#55AD9B] rounded-md p-2"
                  type="date"
                />
              </div>
              <div className="bg-[#55AD9B] text-[#edfff6] w-[35%] px-4 py-2 text-center rounded-md cursor-pointer">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Konsultasi;
