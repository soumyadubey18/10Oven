import React from "react";
function DishesCard(props) {
  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className=" h-24 w-24 rounded-full lg:h-40 lg:w-40 ">
        <img src={props.img} alt="" className="rounded-full h-24 w-24  lg:h-40 lg:w-40" />
      </div>
      <div>
        <h2 className="text-black font-bold text-2xl text-center">
          {props.tittle}
        </h2>
      </div>
    </div>
  );
}

export default DishesCard;
