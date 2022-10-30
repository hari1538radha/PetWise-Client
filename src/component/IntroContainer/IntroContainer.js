import React from "react";
import Ellipse from "../../Images/Ellipse 4.svg";
import Dog from "../../Images/Dog.svg";
import Cat from "../../Images/Cat.svg";
import Paws from "../../Images/Mask group.svg";

const IntroContainer = () => {
  return (
    <div className="h-[900px] relative w-screen bg-amber-400 flex justify-center items-center">
      <div className="absolute left-[200px] z-40">
        <h1 className="text-5xl w-[345px] h-[102px] leading-[48px] font-bold">
          PET FOOD OF SUPERMARKET
        </h1>
        <div className=" text-xl font-normal mt-[30px] w-[475px] z-10 h-48">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form,
          </p>
          <div>
            <button className="w-[201px]  bg-red-500 rounded-[110px] text-white shadow-2xl shadow-red-400 mt-10 mr-6  h-[52px]">
              Shop Top
            </button>
            <button className="w-[201px]  rounded-[110px] text-red-500 border-2 border-red-500 mt-10 mr-6  h-[52px]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            className=" w-[900px] absolute right-0 bottom-0 z-20"
            src={Ellipse}
          ></img>
          <img
            className="absolute right-16 bottom-0 w-[710px] z-40"
            src={Dog}
          ></img>
          <img
            className="absolute bottom-0 right-0 z-20 w-[690px]"
            src={Cat}
          ></img>
          <img className="absolute z-0 bottom-0 right-[89px] w-[780px] h-[720px]" src={Paws}></img>
        </div>
      </div>
    </div>
  );
};

export default IntroContainer;
