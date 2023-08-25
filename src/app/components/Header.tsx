"use client";
import React, { ChangeEvent, useContext, useState } from "react";
import Store from "../store";
import { observer } from "mobx-react-lite";

const Header = () => {
  const store = useContext(Store);
  const { setQuery } = store;
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(searchValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="h-100 md:h-[83vh] md:mt-0 md:px-10">
      <form
        className="bg-no-repeat bg-cover md:h-full h-[38vh] bg-[url('/headerBG.svg')] bg-blend-darken bg-black/30 text-white flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="md:text-4xl w-[80vw] md:w-[60vw] text-center p-4 rounded-xl">
          Your local source of high-quality images and videos directly from
          their creators
        </h1>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="py-2 w-[80vw] md:w-[60vw] md:h-[6vh] text-black rounded-full md:placeholder:text-slate-400 pl-9 md:pl-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search photos and videos"
            type="text"
            name="search"
            value={searchValue}
            onChange={handleInputChange}
          />
          <p className="text-[12px] pt-2 pl-9 w-[80vw] md:w-[60vw]">
            Recommended: Field1, Field2, Field3, Field4, Field5
          </p>
        </label>
        <button type="submit" className="sr-only">
          Search
        </button>
      </form>
    </div>
  );
};

export default observer(Header);
