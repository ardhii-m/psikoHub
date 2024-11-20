import React from "react";
import FeatherIcon from "feather-icons-react";

const Footer = () => {
  return (
    <div className="bg-[#D8EFD3] text-[#3A4D39] flex flex-col gap-12 w-full text-left mt-10 px-8 py-16 md:flex md:flex-row">
      <div className="w-full md:w-[30%]">
        <h1 className="font-semibold text-xl">Visi</h1>
        <p className="text-justify text-sm md:text-base">
          Menjadi klinik psikologi terdepan yang memberikan pelayanan kesehatan
          mental berkualitas, terpercaya, dan mudah diakses oleh semua orang
          untuk menciptakan masyarakat yang sehat secara mental, emosional, dan
          sosial.
        </p>
      </div>
      <div className="w-full md:w-[40%]">
        <h1 className="font-semibold text-xl">Misi</h1>
        <p className="text-justify text-sm md:text-base">
          <ol className="list-decimal">
            <li>
              Memberikan layanan psikologi yang profesional, berbasis ilmu
              pengetahuan, dan sesuai dengan kebutuhan setiap individu.
            </li>
            <li>
              Mengedukasi masyarakat tentang pentingnya kesehatan mental dan
              menghilangkan stigma terkait gangguan psikologis.
            </li>
          </ol>
        </p>
      </div>
      <div className="w-full md:w-[30%]">
        <h1 className="font-semibold text-xl">Contact Us!</h1>
        <p className="text-sm md:text-base">
          <ul className="items-center">
            <li className="flex gap-1">
              <FeatherIcon icon="map-pin" /> Jl. Jalan Kemiri No. 123, Kota
              Bandung, Jawa Barat 40151
            </li>
            <li className="flex gap-1">
              <FeatherIcon icon="phone" /> (022) 123456789
            </li>
            <li className="flex gap-1">
              <FeatherIcon icon="mail" /> support@psikohub.com
            </li>
            <li className="flex gap-1">
              <FeatherIcon icon="globe" /> www.psikohub.com/contact-us
            </li>
            <li className="flex gap-1">
              <FeatherIcon icon="instagram" />PsikoHub
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Footer;
