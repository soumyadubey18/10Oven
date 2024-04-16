import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo10oven.png";

function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div
      className={`flex flex-col justify-center items-center w-full h-screen bg-white transition-opacity  duration-1000 ${
        isLoading ? " " : "animate-ping"
      } `}
    >
      <div className="w-52 h-52">
        <img src={logo} alt="" className="h-52 w-52" />
      </div>
    </div>
  );
}

export default Loader;
