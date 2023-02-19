import {
  faCartArrowDown,
  faCartShopping,
  faClock,
  faGear,
  faGlobe,
  faHeart,
  faHome,
  faMailReply,
  faMessage,
  faMoneyBill,
  faSave,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import musicLogo from "../../assets/logo.png";

const SideBar = () => {
  return (
    <div>
      <div className="flex justify-start items-center gap-0 pl-4">
        <img src={musicLogo} className="h-8 " alt="logo" />
        <p className="mt-4 pl-8 text-xl md:text-2xl lg:text-3xl inline">
          MK Sounds
        </p>
      </div>

      <ul className="flex flex-col gap-8 pl-6 pt-8 font-bold">
        <li>
          <Link>
            {" "}
            <FontAwesomeIcon icon={faHome} className="px-1" /> Home
          </Link>
        </li>
        <li>
          <Link>
            {" "}
            <FontAwesomeIcon icon={faGlobe} /> Explore
          </Link>
        </li>
        <li>
          <Link>
            {" "}
            <FontAwesomeIcon icon={faHeart} className="px-1" /> Saved
          </Link>
        </li>
        <li>
          <Link>
            {" "}
            <FontAwesomeIcon icon={faCartShopping} className="px-1" /> Cart
          </Link>
        </li>
        <li>
          <Link>
            {" "}
            <FontAwesomeIcon icon={faMoneyBill} className="px-1" /> Selling
          </Link>
        </li>
        <li>
          <Link>
            {" "}
            <FontAwesomeIcon icon={faUser} className="px-1" /> Profile
          </Link>
        </li>
        <li>
          <Link>
            {" "}
            <FontAwesomeIcon icon={faClock} className="px-1" /> History
          </Link>
        </li>
        <li>
          <Link>
            {" "}
            <FontAwesomeIcon icon={faMessage} className="px-1" /> Contact Us
          </Link>
        </li>
        <li>
          <Link>
            {" "}
            <FontAwesomeIcon icon={faGear} className="px-1" /> Setting
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
