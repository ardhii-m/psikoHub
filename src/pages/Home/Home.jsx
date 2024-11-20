import React from "react";
import {
  Navbar,
  Hero,
  Card,
  Banner,
  About,
  Footer,
} from "./../../components/index";
import CardKlinik from "../../components/CardKlinik";

const Home = () => {
  return (
    <>
      <div className="bg-[#edfff6]">
        <Navbar />
        <Hero />
        <Card />
        <CardKlinik/>
        <Banner />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default Home;
