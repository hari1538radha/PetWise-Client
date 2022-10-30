import React from "react";
import SearchLogo from "../../Images/SearchLogo.svg";
import Logo from "../../Images/Logo.svg";
import Cart from "../../Images/shopping-cart 1.svg";
import ProfileLogo from "../../Images/Icon color.svg";

const Navbar = () => {
  return (
    <div>
      <div className=" w-screen h-16 flex justify-center items-center bg-red-500 font-[Poppins] text-white">
        Free Shipping USA & Worldwide on All Orders
      </div>
      <div className="flex w-screen h-[140px] items-center">
        <div className="flex ml-[250px]">
          <div>
            <img src={SearchLogo} alt="Search"></img>
          </div>
          <div>
            <ui className="ml-28">
              <a className="w-[83px]  h-5 mr-10">Home</a>
              <a className="w-[83px]  h-5 mr-10">Shop</a>
              <a className="w-[83px] h-5 mr-10">Collections</a>
            </ui>
          </div>
        </div>
        <div>
          <img src={Logo} className="mr-9" alt="Logo"></img>
        </div>
        <ui className="mr-14">
          <a className="w-[83px]  h-5 mr-10">Services</a>
          <a className="w-[83px]  h-5 mr-10">About Us</a>
          <a className="w-[83px]  h-5 mr-10">Contact Us</a>
        </ui>
        <div className="flex">
          <img className="mr-10" src={Cart} alt="Cart"></img>
          <img src={ProfileLogo} alt="ProfileLogo"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
