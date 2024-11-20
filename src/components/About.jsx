import React from "react";
import Klinik1 from "/assets/klinik1.jpg"

const About = () => {
  return (
    <div className="flex flex-col gap-10 mx-6 my-8 md:flex-row">
      <div className="flex flex-col items-center">
        <h2 className="text-[#4b4b4b] font-semibold text-xl my-4">About Us!</h2>
        <img src={Klinik1} alt="" className="w-full h-full"/>
      </div>
      <div className="flex items-center ">
        <p className="text-[#3A4D39] text-justify">
          Selamat datang di PsikoHub, tempat yang didedikasikan untuk membantu
          Anda mencapai kesejahteraan mental dan emosional. Kami memahami bahwa
          setiap individu memiliki perjalanan yang unik, dan kami ada untuk
          memberikan dukungan serta solusi yang sesuai dengan kebutuhan Anda.
          Tim profesional kami terdiri dari psikolog berlisensi dan
          berpengalaman yang siap membantu Anda menghadapi berbagai tantangan
          mental, emosional, dan psikologis, mulai dari masalah kecemasan,
          depresi, stres, hingga pengembangan diri dan peningkatan kualitas
          hidup. Kami percaya bahwa perawatan kesehatan mental yang holistik dan
          berbasis ilmu pengetahuan dapat membantu Anda menemukan makna dan
          ketenangan dalam hidup.
        </p>
      </div>
    </div>
  );
};

export default About;
