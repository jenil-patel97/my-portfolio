import Image from "next/image";
import Link from "next/link";
import React from "react";
import bankImg from "../public/assets/projects/bank.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const bank = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={bankImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Bank App</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="my-4 underline">Overview</h2>
          <p className="text-black">
            I built this application in React JS and is hosted on vercel. This
            application is for reviewing my design work and for practice on my
            skills. It features some major contents and some other featured
            selection.
          </p>
          <a
            href="https://my-bank-app.vercel.app/"
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
                <RiRadioButtonFill className="pr-1" /> Tailwindcss
              </p>
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-dom
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

export default bank;
