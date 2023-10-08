"use client";
import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div
        className="
        absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br
        from-pink-400
        to-[#0055D1]
        rounded-md
        filter
        blur-3xl
        opacity-50
        -z-50
        "
      ></div>
      <div
        className={
          "flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl"
        }
      >
        <Image
          src={"https://links.papareact.com/c2cdd5"}
          alt={"Trello"}
          width={300}
          height={100}
          className="object-contain pb-10 w-44 md:w-56 md:pb-0"
        />

        <div className="flex items-center justify-end flex-1 w-full space-x-5">
          <form className="flex items-center flex-1 p-2 space-x-3 bg-white rounded-md shadow-md lg:flex-initial">
            <MagnifyingGlassIcon className={"h-6 w-6 text-gray-400"} />
            <input
              type="text"
              placeholder={"Search"}
              className={"flex-1 outline-none p-2"}
            />
            <button hidden type={"submit"}>
              Search
            </button>
          </form>

          {/*  Avatar */}
          <Avatar name={"Abdus samad"} round size={"50"} color={"#0055D1"} />
        </div>
      </div>

      <div className={"flex items-center justify-center px-5 md:py-5"}>
        <p
          className={
            "flex items-center text-sm font-light p-5 w-fit shadow-xl bg-white italic max-w-3xl text-[#0055D1] rounded-xl"
          }
        >
          <UserCircleIcon
            className={"inline-block h-10 w-10 text-[#0055D1] mr-1"}
          />
          GPT is summerizing your day
        </p>
      </div>
    </header>
  );
};

export default Header;