"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${
        toggle &&
        " bg-[#fff] w-screen h-100 right-0 ease-out duration-200 fixed flex-col py-0 px-0 justify-start"
      } md:py-4 md:px-5 flex md:justify-between items-center ease-in duration-200`}
    >
      <div className=" py-4 px-5 flex w-screen justify-between md:w-auto md:p-0">
        <Image
          width={25}
          height={25}
          className={` w-auto hover:scale-25 ease-out duration-300`}
          src="/click-logo.svg"
          alt=""
        />
        <button className="md:hidden " onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <Image
              width={5}
              height={5}
              className={` w-9 ease-out duration-300`}
              src="/toggle-Close.svg"
              alt=""
            />
          ) : (
            <Image
              width={5}
              height={5}
              className={` w-9 ease-out duration-300`}
              src="/toggle-Open.svg"
              alt=""
            />
          )}
        </button>
      </div>

      <ul
        className={` gap-8 ${
          toggle ? "visible w-[90vw] justify-center flex-col" : "hidden"
        } md:flex items-center justify-center h-100 md:h-auto`}
      >
        <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh]">
          Explore
        </li>
        <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh]">
          Discover
        </li>
        <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh]">
          For Professionals
        </li>
        <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh]">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </li>
        <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh]">
          <button>Submit Photos</button>
        </li>
        <li className="hidden md:visible">|</li>
        <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh]">
          <button>Login</button>
        </li>
        <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh]">
          <button>Join Free</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
