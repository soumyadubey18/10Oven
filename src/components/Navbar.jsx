import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-scroll";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

function Navbar({ setAbc, abc }) {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full z-20 ">
      <div>
        {/* <div className="w-full h-20 bg-ovenRed flex justify-center items-center  ">
          <div className="h-16 w-16 bg-white justify-center items-center flex rounded-full"></div>
          <div className="h-16 w-16 bg-white justify-center items-center flex rounded-full"></div>
        </div> */}
        <div className="bg-black">
          <div className=" w-full h-20 rounded-xl bg-ovenRed  flex justify-between items-center   px-8 md:px-16 lg:px-24">
            <div className="w-16 h-16  bg-white rounded-full"></div>
            <div className="w-16 h-16   bg-white rounded-full"></div>
            <div className="w-16 h-16  bg-white rounded-full"></div>
            <div className="w-16 h-16   bg-white rounded-full"></div>
          </div>
        </div>
        <div className="flex float-row justify-between items-center px-5 py-2 bg-black shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer p-0 h-16 w-16 bg-white justify-center  rounded-full">
            <img src={logo} alt="Cafe Logo" className="h-12 p-0" />
          </div>
          <nav className=" hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-ovenRed text-white transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-ovenRed text-white  transition-all cursor-pointer"
            >
              Dishes
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-ovenRed text-white  transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-ovenRed text-white  transition-all cursor-pointer"
            >
              Contact
            </Link>
          </nav>
          <div className="md:hidden float items-center">
            {menu ? (
              <MdOutlineRestaurantMenu
                size={25}
                onClick={handleChange}
                color="white"
              />
            ) : (
              <TiThMenu size={25} onClick={handleChange} color="white" />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col justify-start items-start absolute bg-black text-white left-0 font-semibold text-xl text-center pt-5 pl-10 pb-4 gap-8 w-full h-screen transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-ovenRed text-white  transition-all cursor-pointer"
            onClick={handleChange}
          >
            Home
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-ovenRed text-white  transition-all cursor-pointer"
            onClick={handleChange}
          >
            Dishes
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-ovenRed text-white  transition-all cursor-pointer"
            onClick={handleChange}
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-ovenRed text-white  transition-all cursor-pointer"
            onClick={handleChange}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

// <header className="bg-white p-4 flex justify-center items-center"></header>
{
  /* <img src={logo} alt="Cafe Logo" className="h-16" /> */
}
export default Navbar;
