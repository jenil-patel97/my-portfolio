import Image from "next/image";
import Link from "next/link";
import React from "react";
import netflixImg from "../public/assets/projects/netflix.jpg";
import newsImg from "../public/assets/projects/News.jpg";
import foodImg from "../public/assets/projects/food.jpg";
import weatherImg from "../public/assets/projects/weather.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[black] underline cursor-pointer">
          Projects
        </p>
        <h2 className="py-4 cursor-default">What I&#39;ve Built Recent</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="News App"
            backgroundImg={newsImg}
            projectUrl="/news"
            tech="React JS"
          />
          <ProjectItem
            title="Food App"
            backgroundImg={foodImg}
            projectUrl="/food"
            tech="React JS"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherImg}
            projectUrl="/weather"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
