import React from "react";
import img from "../assets/images/about.avif";
import Button from "./Button";

function About() {
  return (
    <div>
      <div className=" min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 ">
        {/* <img src={img} alt="About" className="w-1/2 rounded-xl" /> */}
        <div className="space-y-4 lg:pt-14 m-4">
          <h1 className="font-semibold text-4xl text-center md:text-start ">
            About us
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
            maiores ea? Aspernatur repudiandae dolor commodi quae perferendis
            nemo provident veritatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illum
            pariatur, perspiciatis eius sapiente dolor quibusdam culpa dicta.
            Quo, dolore?
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button title="Learn More"></Button>
          </div>
        </div>
      </div>
      <div className="sm:flex-row md:flex lg:flex  bg-black pb-16 pt-10">
        <div className="flex-row p-5 space-y-3 ">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/authen-1.png"
            alt=""
            className="h-24"
          />
          <h2 className="font-semibold text-white text-3xl">
            Authentic Variety
          </h2>
          <p className="text-white">
            Our widest range of biryanis are made with authentic ingredients
            handpicked from each part of India.
          </p>
        </div>
        <div className="flex-row  p-5 space-y-3">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/534563.png"
            alt=""
            className="h-24"
          />
          <h2 className="font-semibold text-white text-3xl">
            Eco-Friendly Dum Sealed Packaging
          </h2>
          <p className="text-white">
            The special ‘Dum Seal’ locks in the aromas and flavours, keeping
            them fresh and safe, waiting to be unlocked only by you.
          </p>
        </div>
        <div className="flex-row  p-5 space-y-3">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/43223.png"
            alt=""
            className="h-24"
          />
          <h2 className="font-semibold text-white text-3xl">
            Transparent Kitchen
          </h2>
          <p className="text-white">
            The biryanis are prepared right in front of your eyes, in a
            transparent kitchen that prioritizes hygiene.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
