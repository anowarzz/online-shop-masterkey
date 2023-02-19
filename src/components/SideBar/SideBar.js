import React from "react";
import { Link } from "react-router-dom";
import musicLogo from  '../../assets/logo.png'


const SideBar = () => {
  return (
    <div>

        <div className="flex justify-start items-center gap-0 pl-4">
            <img src={musicLogo} className="h-8 " alt="logo" />
            <p className="mt-4 pl-8 text-xl md:text-2xl lg:text-3xl inline">MK Sounds</p>
        </div>


      <ul className="flex flex-col gap-8 pl-6 pt-8 font-bold">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Explore</Link>
        </li>
        <li>
          <Link>Saved</Link>
        </li>
        <li>
          <Link>Cart</Link>
        </li>
        <li>
          <Link>Selling</Link>
        </li>
        <li>
          <Link>Profile</Link>
        </li>
        <li>
          <Link>History</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
        <li>
          <Link>Setting</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
