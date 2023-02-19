import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMessage } from "@fortawesome/free-solid-svg-icons";
import Message from "../../assets/mail.png";
import Alarm from "../../assets/alram.png";
import Customer from "../../assets/customer.png";

const Navbar = () => {
  return (
    <nav className="pt-4 px-4">
      <div className="flex justify-between">
        <div>
          <h4 className="text-2xl md:text-3xl font-bold">HeadPhone</h4>
          <p className="pl-4">For the top Brand</p>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <img src={Message} alt=""  className=" w-10 bg-primary p-2"/>
          <img src={Customer} alt="" className=" w-10 bg-primary p-2" />
          <img src={Alarm} alt="" className=" w-10 bg-primary p-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
