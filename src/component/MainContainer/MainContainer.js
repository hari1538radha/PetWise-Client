import React, { useState } from "react";
import Logo from "../../Images/LogoHeart.svg";
import Group from "../../Images/Group1.svg";
import Product1 from "../../Images/product1.svg";
import Product2 from "../../Images/product2.svg";
import Product3 from "../../Images/product3.svg";
import Product4 from "../../Images/product4.svg";
import { Rating } from "@mui/material";

const MainContainer = () => {
  const [value, setvalue] = useState(0);
  const handelRatings = (e) => {
    e.preventDefault();
    console.log(e);
    setvalue(3);
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-10 mb-24">
        <div className="">
          <img src={Logo}></img>
          <p className=" font-medium text-xl mt-7 w-[478px]">
            Save big annually with our veterinarian recommended wellness plan.
          </p>
          <button className="w-[201px]  bg-red-500 rounded-[110px] text-white shadow-2xl shadow-red-400 mt-10 mr-6  h-[52px]">
            Shop Now
          </button>
        </div>
        <div>
          <img src={Group}></img>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          <h1 className="font-bold text-red-500 text-5xl mr-2">Best</h1>
          <h1 className="font-bold text-5xl">Seller</h1>
        </div>
        <div className="flex gap-8 mt-8 mb-10">
          <div className="flex flex-col justify-center items-center">
            <img src={Product1}></img>
            <Rating
              name="simple-controlled"
              defaultValue={0}
              precision={0.1}
              max={5}
              onChange={handelRatings}
            />
            <p className="font-medium">Nam justo libero porta ege</p>
            <h1 className="text-red-500 ">$85.00</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Product2}></img>
            <Rating
              name="simple-controlled"
              defaultValue={2.5}
              precision={0.1}
              max={5}
              onChange={handelRatings}
            />
            <p className="font-medium">Morbi vel arcu scelerisque</p>
            <h1 className="text-red-500 ">$85.00</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Product3}></img>
            <Rating
              name="simple-controlled"
              defaultValue={3.7}
              precision={0.1}
              max={5}
              onChange={handelRatings}
            />
            <p className="font-medium">Etiam commodo leo sed</p>
            <h1 className="text-red-500 ">$85.00</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Product4}></img>
            <Rating
              name="simple-controlled"
              defaultValue={3.5}
              precision={0.1}
              max={5}
              onChange={handelRatings}
            />
            <p className="font-medium">Morbi vel arcu scelerisque</p>
            <h1 className="text-red-500 ">$85.00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
