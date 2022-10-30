import React from "react";
import DogHeart from "../../Images/dog 1.svg";
import Suport from "../../Images/suport.svg";
import Truck from "../../Images/truck.svg";
import Shelid from "../../Images/shield.svg"
const introContainerSub = () => {
  return (
    <div className="h-[502px] flex flex-col items-center">
      <div className="mt-10 h-[127px]">
        <img src={DogHeart}></img>
      </div>
      <br></br>
      <div className="flex text-5xl font-bold">
        <h1 className="text-red-500 mr-2"> What your pet needs,</h1>
        <h1> when they need it.</h1>
      </div>
      <div>
        <div className="flex justify-evenly mt-12 w-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-[95px] h-[84px] bg-blue-200 rounded-lg items-center flex justify-center">
            <img src={Suport}></img>

            </div>
            <h3 className="font-bold text-red-500 text-xl">24/7 Support</h3>
            <p  className="w-[200px] text-center">Shop online to get orders over $35 shipped fast and free.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
          <div className="w-[95px] h-[84px] bg-purple-200 rounded-lg items-center flex justify-center">
            <img src={Truck}></img>
            </div>
            <h3 className="font-bold text-red-500 text-xl">Free Same-Day Delivery</h3>
            <p  className="w-[200px] text-center">
              Order by 2pm local time to get free delivery on orders $35+ today.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
          <div className="w-[95px] h-[84px] bg-rose-200 rounded-lg items-center flex justify-center">
            <img src={Shelid}></img>
            </div>
            <h3 className="font-bold text-red-500 text-xl">Security payment</h3>
            <p  className="w-[200px] text-center">35% off your first order plus 5% off all future orders.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default introContainerSub;
