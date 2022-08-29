import Image from "next/image";
import Link from "next/link";
import React from "react";
import foodImg from "../public/assets/projects/food.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const news = () => {
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
            also display's my love for pizza.
          </p>
          <a href="https://food-app-two-mu.vercel.app/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">App</button>
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
          <p className="font-bold underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default news;
