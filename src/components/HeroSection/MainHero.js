import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeroImage from "../../assets/hero-image.png";

const MainHero = () => {
  return (
    <div>
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-bold my-4">
              Beats Studio3 Wireless Headphone
            </h1>
            <p>
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              <span className="text-gray-400 pl-2">(200+ Reviews)</span>

              <p className="text-secondary font-bold">Price : $450.55</p>
            </p>
            <p className="py-6">
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

export default MainHero;
