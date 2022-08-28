import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[black] underline cursor-default">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your average developer.</p>
          <p className="py-2 text-gray-600">
            I have always had a knack for technology and working with computers.
            In early 2022 I started working with HTML and CSS to make some minor
            edits on a small business website that I was operating. What I
            thought was just a few small edits turned into a love for
            programming & than I started my self-thought developing journey.
          </p>
          <p className="py-2 text-gray-600">
            I was Fascinated with how intricate programming can & be I was
            quickly drawn to learn more, then I started learning javascript and
            I was even more enthused with making websites interactive. I am now
            spending my time building projects with React JS, Firebase, and
            learning new technologies everyday.
          </p>
          <p className="py-2 text-black underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="shadow-xl cursor-pointer shadow-gray-400 rounded-xl flex justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/about.png"
            width={370}
            height={380}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
