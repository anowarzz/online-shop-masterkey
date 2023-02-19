import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";

const HomePage = () => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-2">
        <SideBar />
      </div>

      <div className="col-span-5">
        <Navbar />

        <HeroSection />
      </div>
    </div>
  );
};

export default HomePage;
