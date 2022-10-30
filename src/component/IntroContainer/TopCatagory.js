import React from "react";
import Topc1 from "../../Images/topc1.svg";
import Topc2 from "../../Images/topc2.svg";

import Topc3 from "../../Images/topc3.svg";

import Topc4 from "../../Images/topc4.svg";

const TopCatagory = () => {
  return (
    <div className="mb-16 mt-28">
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-red-500 text-5xl mr-2">Top</h1>
        <h1 className="font-bold text-5xl">Categories</h1>
      </div>
      <div className=" font-medium mt-7 flex  justify-center items-center gap-8">
        <div className="flex flex-col  justify-center items-center">
          <div className=" shadow-lg shadow-slate-300 flex  justify-center items-center w-[270px] h-[270px] bg-purple-100 rounded-lg">
            <img src={Topc1}></img>
          </div>
          <div className="mt-2">
            <p>Cat Toys</p>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <div className="flex shadow-lg shadow-slate-300  justify-center items-center w-[270px] h-[270px] bg-rose-100 rounded-lg">
            <img src={Topc2}></img>
          </div>
          <div className="mt-2">
            <p>Cat Food</p>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <div className="flex shadow-lg shadow-slate-300 justify-center items-center w-[270px] h-[270px] bg-green-100 rounded-lg">
            <img src={Topc3}></img>
          </div>
          <div className="mt-2">
            <p>Dog Toys</p>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <div className="flex shadow-lg shadow-slate-300 justify-center items-center w-[270px] h-[270px] bg-yellow-100 rounded-lg">
            <img src={Topc4}></img>
          </div>
          <div className="mt-2">
            <p>Dog Food</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCatagory;
