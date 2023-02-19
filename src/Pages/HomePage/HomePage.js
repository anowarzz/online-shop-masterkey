import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";

const HomePage = () => {
  return (
    <div className="grid grid-cols-8 gap-5">
      <div className="col-span-2 border-r-gray-300 border-4 border-y-transparent">
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
