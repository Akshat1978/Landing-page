import React, { useState } from "react";
import { FaUserPlus } from 'react-icons/fa'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

//   const handleLoginClick = () => {
//     // Handle login click logic
//   };

  const handleSignupClick = () => {
    // Handle signup click logic
  };

  return (
    <nav className="flex items-center justify-between w-full py-6 navbar">
      <img src={logo} alt="hoobank" className="w-[127px] h-10" />

      <ul className="items-center justify-end flex-1 hidden gap-10 list-none sm:flex">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-base text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="font-poppins font-normal cursor-pointer text-base text-white">
          <button className="icon-button" onClick={handleSignupClick}>
            <FaUserPlus size={30} />  
          </button>
        </li>
      </ul>

      <div className="flex items-center justify-end flex-1 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="object-contain cursor-pointer w-7 h-7"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col items-center justify-end flex-1 gap-4 list-none">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-base text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="font-poppins font-normal cursor-pointer text-base text-white">
              <button className="icon-button" onClick={handleSignupClick}>
                <FaUserPlus size={30}  />  
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
