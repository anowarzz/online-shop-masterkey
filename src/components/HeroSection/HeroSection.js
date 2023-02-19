import React from "react";
import Main from "../../Layout/Main";
import MainHero from "./MainHero";
import "./HeroSection.css";
import Earphone from "../../assets/earphone.png";
import HeadPhone from "../../assets/headphone.png";
const HeroSection = () => {
  return (
    <div className="grid grid-cols-8 gap-8 my-10">
      <div className="shadow-md col-span-8 md:col-span-6">
        <MainHero />
      </div>

      <div className="border feature-product col-span-8 md:col-span-2 flex flex-col justify-center items-center">
        <p className="text-lg text-white p-4">
          Summer HeadPhones From Top Brands
        </p>
        <img src={HeadPhone} alt="" />
        <img src={Earphone} alt="" className="w-12" />
      </div>
    </div>
  );
};

export default HeroSection;
