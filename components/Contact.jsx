import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[black] underline cursor-default">
          Contact
        </p>
        <h2 className="py-4 cursor-default">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}

          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl cursor-pointer shadow-gray-400 rounded-xl flex justify-center p-4 hover:scale-105 ease-in duration-300">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl"
                  src="/../public/assets/contact.png"
                  height={240}
                  width={350}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Jenil Patel</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or Project-based Work. Contact me
                  for work.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 underline">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaTwitter />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
