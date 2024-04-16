import React from "react";
import dimg from "../assets/images/product1.jpg";
import Button from "./Button1";
import { FaCaretSquareUp } from "react-icons/fa";
function ProductCard({
  title = "Product Name",
  description = "lorem32 cfqwf qfw qwf qdwqf wqdqw ddqfwedv dwe vcweq jkgchghcwhewg hgehwhe fkwehfkwhkjfwhkj ehfkjw hfkjwhef kjwhk jhewkj fhwjk fhwkjfh kjwh fkjehkjgh efjwlk jkeg kjehgkjeh gkje erkjgh kjrhgkjr",
  img = dimg,
  type = "non-veg",
}) {
    let color = 'red'
    if(type=='veg'){
        type='Veg'
        color='green'
    }else{
      type='Non-veg'
    }
  return (
    <div className="bg-white  sm:w-full lg:w-96 md:w-96 shadow-lg rounded-xl">
      <div
        className="bg-cover bg-center h-56 w-full mt-10 rounded-t-xl"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="p-5 flex" >
          <FaCaretSquareUp size={25} color={color} className="" />
          <h2 className="text-lg text-white font-semibold px-2">{type} </h2>
        </div>
      </div>
      <div className="px-5 py-3 space-y-2">
        <h2 className="text-xl font-semibold text-wrap">{title}</h2>
        <p className="text-wrap line-clamp-2">{description}</p>
        <div className=" flex justify-center">
          <Button tittle="Order by Zomato" className="" />
          <Button tittle="Order by Swiggy" className="" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
