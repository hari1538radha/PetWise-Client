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
          <div className="hover:cursor-pointer">
            <img src={SearchLogo} alt="Search"></img>
          </div>
          <div>
            <ui className="ml-28">
              <a className="w-[83px]  h-5 mr-10 hover:text-red-500 hover:underline hover:cursor-pointer decoration-red-500 ">
                Home
              </a>
              <a className="w-[83px]  h-5 mr-10  hover:text-red-500 hover:underline hover:cursor-pointer decoration-red-500">
                Shop
              </a>
              <a className="w-[83px] h-5 mr-10  hover:text-red-500 hover:underline hover:cursor-pointer decoration-red-500">
                Collections
              </a>
            </ui>
          </div>
        </div>
        <div>
          <img
            src={Logo}
            className="mr-9 hover:cursor-pointer"
            alt="Logo"
          ></img>
        </div>
        <ui className="mr-14">
          <a className="w-[83px]  h-5 mr-10 hover:text-red-500 hover:underline hover:cursor-pointer decoration-red-500">
            Services
          </a>
          <a className="w-[83px]  h-5 mr-10  hover:text-red-500 hover:underline hover:cursor-pointer decoration-red-500">
            About Us
          </a>
          <a className="w-[83px]  h-5 mr-10  hover:text-red-500 hover:underline hover:cursor-pointer decoration-red-500">
            Contact Us
          </a>
        </ui>
        <div className="flex">
          <img
            className="mr-10 hover:cursor-pointer"
            src={Cart}
            alt="Cart"
          ></img>
          <img
            className="hover:cursor-pointer"
            src={ProfileLogo}
            alt="ProfileLogo"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
