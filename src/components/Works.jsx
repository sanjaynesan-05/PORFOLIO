import React, { useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import TiltCard from "./TiltCard"; // Optional, you can replace with <div>

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full group transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 🔹 Subtle Glow Effect */}
      <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 bg-cyan-500 pointer-events-none transition duration-500 z-0 rounded-xl" />

      {/* 🖼️ Project Tile */}
      <TiltCard>
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            loading="lazy"
          />

          {/* 💬 Hover Overlay */}
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm text-white px-5 py-6 flex flex-col justify-end items-start transition-all duration-500 ease-in-out ${
              hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-1">{name}</h3>
            <p className="text-sm text-white/90 mb-3">{description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {tags?.map((tag, i) => (
                <span
                  key={`${name}-${i}`}
                  className={`flex items-center gap-1 text-[12px] sm:text-[13px] ${tag.color}`}
                >
                  <i className={`${tag.icon} text-sm`} />
                  {tag.label}
                </span>
              ))}
            </div>

            {/* GitHub Logo Only (No bg) */}
            <img
              src={github}
              alt="source code"
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-200 invert"
              title="View Source on GitHub"
            />
          </div>
        </div>
      </TiltCard>
    </div>
  );
};

const Works = () => {
  return (
    <section id="work" className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
      <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>

      {/* ⚙️ Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-12">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="w-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
