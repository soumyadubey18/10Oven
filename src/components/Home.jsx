import React, { useState , useEffect } from "react";
import Carousel from "./Carousel";
const slides = [slide1, slide2, slide3];
import OrderButton from "./OrderButton";
import OrderButton2 from "./OrderButton2";
import Dishes from "./Dishes";
import About from "./About";
import Footer from "./Footer";
import FeedbackForm from "./FeedbackForm";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import backgroundImage from "../assets/images/slide7.jpg";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide7.jpg";
import slide5 from "../assets/images/slide5.png";

function Home() {
  const backgroundImageUrl = "url(" + backgroundImage + ")";
  const slides = [
    {
      url: slide1,
    },
    {
      url: slide2,
    },
    {
      url: slide3,
    },
    {
      url: slide4,
    },
    {
      url: slide5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change the interval duration as needed (5000 milliseconds = 5 seconds)

    return () => clearInterval(intervalId);
  }, [currentIndex]); // This effect should re-run whenever currentIndex changes


  return (
    <>
      <div className="h-screen w-full m-auto relative group" id="home">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-6xl z-10 mb-4">
          Satisfy your cravings now!
        </h1>
        <div className="absolute bottom-10 w-full justify-center flex z-10  ">
          <OrderButton title="Order from Zomato" />
          <OrderButton title="Order from Swiggy" />
    
        </div>
        <div className="absolute bottom-10 w-full justify-center flex z-10 ">
          
          <OrderButton2 title="Order from Zomato" />
          <OrderButton2 title="Order from Swiggy" />
        </div>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      
      <div id="dishes">
        <Dishes />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default Home;
