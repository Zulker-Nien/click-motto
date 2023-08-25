"use client";
import "./component.css";
import React, { useContext, useState } from "react";
import SliderView from "./SliderView";
import Store from "../store";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { useFetchImageData } from "../queries/Query";

const Imageview = () => {
  const store = useContext(Store);
  const { query, isLoading, setIsLoading } = store;

  const { data: imageData } = useFetchImageData(query);

  const [imageOpacity, setImageOpacity] = useState(0);

  return (
    <div className="md:mx-20 bg-white h-full mt:0 md:mt-[-20vh] md:px-10 md:pt-5 overflow-hidden">
      <h1 className="text-2xl md:text-left text-center mt-2 md:mt-0">
        Top Categories
      </h1>
      <SliderView />
      <div className="mt-5 ">
        {/* top */}
        <div className="hidden md:flex justify-between">
          <ul className="flex gap-6">
            <li className="text-gray-500 hover:text-gray-700 font-bold ease-out duration-300 cursor-pointer">
              All
            </li>
            <li className="text-gray-500 hover:text-gray-700 font-bold ease-out duration-300 cursor-pointer">
              Photos
            </li>
            <li className="text-gray-500 hover:text-gray-700 font-bold ease-out duration-300 cursor-pointer">
              Videos
            </li>
            <li className="text-gray-500 hover:text-gray-700 font-bold ease-out duration-300 cursor-pointer">
              Freebies
            </li>
            <li className="text-gray-500 hover:text-gray-700 font-bold ease-out duration-300 cursor-pointer">
              360
            </li>
          </ul>
          <div>
            <h1 className="text-gray-500 hover:text-gray-700 font-bold ease-out duration-300 cursor-pointer">
              Recommended
            </h1>
          </div>
        </div>

        {/* bottom */}
        <div className="columns-2 md:columns-3 gap-0 md:gap-4 md:mt-4 lg:columns-4">
          <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute">
            {isLoading ? (
              <>
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                {setIsLoading(false)}
              </>
            ) : (
              <>
                {imageData != null && imageData.length > 0 && (
                  <>
                    {imageData.map((item, index) => (
                      <div className="mb-4 px-4 md:px-0" key={index}>
                        <Image
                          width={100}
                          height={100}
                          src={item.src.medium}
                          alt={item.alt}
                          className="w-full h-auto"
                          style={{ opacity: imageOpacity }}
                          onLoad={() => {
                            setImageOpacity(1);
                          }}
                        />
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Imageview);
