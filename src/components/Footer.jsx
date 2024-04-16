import React from "react";
import QuickLink from "./QuickLink";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("feedback call");
    navigate("/feedback"); // Navigate to the About page
  };
  return (
    <div className="">
      <div className="md:flex-row lg:flex bg-black p-4 pb-32">
        <div className="max-w-5xl pb-8">
          <h2 className="text-white  font-semibold text-xl">QUICK LINKS</h2>
          <div className=" flex flex-wrap">
            <QuickLink placeholder="HOME"></QuickLink>
            <QuickLink placeholder="ABOUT 10OVEN"></QuickLink>
            <QuickLink placeholder="BLOG"></QuickLink>
            <QuickLink placeholder="SAFETY STANDARDS"></QuickLink>
            <QuickLink placeholder="STORE LOCATOR"></QuickLink>
            <QuickLink placeholder="PRIVACY POLICY"></QuickLink>
            <QuickLink placeholder="TERMS & CONDITIONS"></QuickLink>
            <QuickLink placeholder="PIZZA"></QuickLink>
            <QuickLink placeholder="BURGER"></QuickLink>
            <QuickLink placeholder="FRENCH FRIES"></QuickLink>
            <QuickLink placeholder="SOFT DRINK"></QuickLink>
          </div>
        </div>
        <div className=" w-full items-center justify-center flex flex-col ">
          <div className=" mb-10">
            <div>
              <h2 className="text-white mb-3 font-semibold text-xl text-center">
                Follow us
              </h2>
              <div className="w-full items-center justify-center flex gap-5">
                <FaInstagram color="#d3d6d7" size={25} />
                <FaSquareFacebook color="#d3d6d7" size={25} />
              </div>
            </div>
            <div className="w-full items-center justify-center flex flex-col mt-8">
              <a
                href="mailto:care@10oven.com"
                className="text-neutral-300 font-light text-xl"
              >
                care@10oven.com
              </a>
            </div>
            <div className="flex flex-col justify-center items-center mt-8">
              <p className="text-gray-300  mb-3 ">
                Help us in serving you better
              </p>
              <button
                className=" bg-gray-300 text-black border-white border px-4 py-2 rounded-md "
                onClick={handleClick}
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
