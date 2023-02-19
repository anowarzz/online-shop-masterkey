import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeroImage from "../../assets/hero-image.png";

const MainHeroSection = () => {
  return (
    <div>
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-bold">
              Beats Studio3 Wireless Headphone
            </h1>
            <p className="inline mt-2.5">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />

              </p>
              <span className="text-gray-400 pl-2">(200+ Reviews)</span>

              <div className="flex gap-2 mt-2 justify-center items-center">
                <p>Color: </p>
                <div className="flex gap-2 ">
                  <div className="bg-primary w-3 h-3 rounded-full"> </div>
                  <div className="bg-secondary w-3 h-3 rounded-full"> </div>
                  <div className="bg-info w-3 h-3 rounded-full"> </div>
                  <div className="bg-success outline w-3 h-3 rounded-full">
                    {" "}
                  </div>
                </div>
                <div className="px-4">
                  <button className="bg-gray-100 rounded shadow-lg px-6">
                    {" "}
                    <span className="font-bold">+</span>{" "}
                    <span className="font-bold">1</span>{" "}
                    <span className="font-bold">-</span>
                  </button>
                </div>
              </div>

              <div className="flex gap-2 justify-center items-center my-6">
                <button className="outline-primary bg-primary p-2 rounded">
                  {" "}
                  <FontAwesomeIcon icon={faHeart} />{" "}
                </button>
               <button className="border border-primary p-1 rounded"> Add to Cart</button>
               <button className=" border border-primary rounded p-1"> Buy Now</button>
              </div>

              <p className="text-secondary font-bold">Price : $450.55</p>
        
            <p className="py-2">
              Ergonomic or cupe with on-oor controls up to 22 hours of tening
              time. Apple Wi crip & Closs{" "}
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm">
            <div className="card-body">
              <img src={HeroImage} alt="" className="w-" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeroSection;
