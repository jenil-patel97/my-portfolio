import Image from "next/image";
import Link from "next/link";
import React from "react";
import foodImg from "../public/assets/projects/food.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const food = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={foodImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Food App</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="my-4 underline">Overview</h2>
          <p className="text-black">
            I built this application in React JS & Bootstrap and it hosted on
            GitHub. This application is for my styling knowledge & for some fun.
            It features some types of food and their prices & ingredients. It
            also display&#39;s my love for pizza.
          </p>
          <a
            href="https://food-app-two-mu.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg py-2 px-8 mt-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              App
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Food API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <button className="cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg py-2">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default food;
