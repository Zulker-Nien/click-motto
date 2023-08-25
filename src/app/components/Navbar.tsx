"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [dropdown, setDropdown] = useState(false);
  return (
    <>
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
          <button
            className="md:hidden "
            onClick={() => {
              setToggle(!toggle);
              setDropdown(false);
            }}
          >
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
          <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
            Explore
          </li>
          <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
            Discover
          </li>
          <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
            For Professionals
          </li>
          {dropdown && toggle ? (
            <ul className="text-[#929292] text-[14px] px-2 py-2 flex-col items-center">
              <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
                About Click Motto
              </li>
              <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
                Pricing
              </li>
              <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
                License
              </li>
              <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
                Partnerships
              </li>
              <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
                Blog
              </li>
              <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
                Help
              </li>
              <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
                Join the Team
              </li>
            </ul>
          ) : (
            <li
              className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300"
              onClick={() => setDropdown(!dropdown)}
            >
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </li>
          )}
          <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
            <button>Submit Photos</button>
          </li>
          <li className="hidden md:visible text-gray-600">|</li>
          <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
            <button>Login</button>
          </li>
          <li className="flex justify-center items-center border-b-2 md:border-0 h-[5vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
            <button>Join Free</button>
          </li>
          <li className="md:hidden flex justify-around items-center mt:80 md:border-0 h-[10vh] cursor-pointer text-gray-600 hover:text-black ease-out duration-300">
            <Image
              width={5}
              height={5}
              className={` w-9 ease-out duration-300`}
              src="icons/facebook.svg"
              alt=""
            />
            <Image
              width={5}
              height={5}
              className={` w-9 ease-out duration-300`}
              src="icons/twitter.svg"
              alt=""
            />
            <Image
              width={5}
              height={5}
              className={` w-9 ease-out duration-300`}
              src="icons/instagram.svg"
              alt=""
            />
            <Image
              width={5}
              height={5}
              className={` w-9 ease-out duration-300`}
              src="icons/pinterest.svg"
              alt=""
            />
            <Image
              width={5}
              height={5}
              className={` w-9 ease-out duration-300`}
              src="icons/vimeo.svg"
              alt=""
            />
            <Image
              width={5}
              height={5}
              className={` w-9 ease-out duration-300`}
              src="icons/M-icon.svg"
              alt=""
            />
          </li>
        </ul>
      </nav>

      {dropdown && (
        <div className="hidden md:block h-100 w-[12vw] right-0 mr-52 bg-[#111111] absolute ease-out duration-300">
          <ul className="text-[#929292] text-[14px] px-2 py-2 flex-col items-center ease-out duration-300">
            <li className="cursor-pointer hover:bg-[#1C1C1C] hover:text-[#fff] ease-out duration-300">
              About Click Motto
            </li>
            <li className="cursor-pointer hover:bg-[#1C1C1C] hover:text-[#fff] ease-out duration-300">
              Pricing
            </li>
            <li className="cursor-pointer hover:bg-[#1C1C1C] hover:text-[#fff] ease-out duration-300">
              License
            </li>
            <li className="cursor-pointer hover:bg-[#1C1C1C] hover:text-[#fff] ease-out duration-300">
              Partnerships
            </li>
            <li className="cursor-pointer hover:bg-[#1C1C1C] hover:text-[#fff] ease-out duration-300">
              Blog
            </li>
            <li className="cursor-pointer hover:bg-[#1C1C1C] hover:text-[#fff] ease-out duration-300">
              Help
            </li>
            <li className="cursor-pointer hover:bg-[#1C1C1C] hover:text-[#fff] ease-out duration-300">
              Join the Team
            </li>
            <li className="flex justify-around pt-2 cursor-pointer hover:bg-[#1C1C1C] hover:text-[#fff] ease-out duration-300">
              <Image
                width={5}
                height={5}
                className={` w-5 ease-out duration-300`}
                src="icons/facebook.svg"
                alt=""
              />
              <Image
                width={5}
                height={5}
                className={` w-5 ease-out duration-300`}
                src="icons/twitter.svg"
                alt=""
              />
              <Image
                width={5}
                height={5}
                className={` w-5 ease-out duration-300`}
                src="icons/instagram.svg"
                alt=""
              />
              <Image
                width={5}
                height={5}
                className={` w-5 ease-out duration-300`}
                src="icons/pinterest.svg"
                alt=""
              />
              <Image
                width={5}
                height={5}
                className={` w-5 ease-out duration-300`}
                src="icons/vimeo.svg"
                alt=""
              />
              <Image
                width={5}
                height={5}
                className={` w-5 ease-out duration-300`}
                src="icons/M-icon.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
