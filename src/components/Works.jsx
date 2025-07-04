import React, { useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import TiltCard from "./TiltCard"; // You can replace with <div> if not using tilt

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full group transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 🔹 Hover Glow (subtle) */}
      <div className="absolute inset-0 rounded-[20px] blur-2xl opacity-0 group-hover:opacity-40 transition duration-500 bg-cyan-400 pointer-events-none z-0" />

      {/* 🖼️ Image Only Until Hover */}
      <TiltCard>
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[20px] shadow-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* 🧊 Glass Hover Overlay */}
          <div
            className={`absolute inset-0 px-5 py-6 bg-white/10 backdrop-blur-md text-white flex flex-col justify-center items-start rounded-[20px] transition-all duration-500 ease-in-out ${
              hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
            }`}
          >
            <h3 className="text-[20px] sm:text-[22px] font-bold mb-2 drop-shadow-md">
              {name}
            </h3>
            <p className="text-[14px] sm:text-[15px] mb-4 text-white/90">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags?.map((tag, i) => (
                <span
                  key={`${name}-${i}`}
                  className={`flex items-center gap-1 text-[12px] sm:text-[13px] ${tag.color} drop-shadow-sm hover:scale-105 transition-transform duration-200`}
                >
                  <i className={`${tag.icon} text-sm`} />
                  {tag.label}
                </span>
              ))}
            </div>

            {/* 🤍 White GitHub Logo */}
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
      <div>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </div>

      <div className="works-container grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 justify-center">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="mx-auto max-w-md w-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
