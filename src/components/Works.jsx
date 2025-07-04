import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full group sm:scale-95 transition-transform duration-300">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition duration-500 z-0 pointer-events-none bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500"></div>

      <Tilt
        options={{ max: 35, scale: 1.05, speed: 500 }}
        className="relative z-10 bg-gradient-to-br from-[#1e293b] to-[#334155] shadow-xl rounded-[20px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
      >
        <motion.div
          className="relative w-full h-[240px] sm:h-[300px] md:h-[340px] rounded-[20px] overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* 📸 Project Image */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center rounded-[20px]"
            loading="lazy"
          />

          {/* 💡 Hover Glass Details */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-white/10 backdrop-blur-md text-white px-5 py-6 flex flex-col justify-center items-start z-20 rounded-[20px] border border-white/20 shadow-[0_12px_36px_rgba(0,0,0,0.6)]"
              >
                <h3 className="text-[20px] sm:text-[22px] font-bold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">
                  {name}
                </h3>
                <p className="text-[14px] sm:text-[15px] mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tags?.map((tag, i) => (
                    <motion.span
                      key={`${name}-${i}`}
                      className={`flex items-center gap-1 text-[12px] sm:text-[13px] ${tag.color} drop-shadow-sm`}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <i className={`${tag.icon} text-sm`} />
                      {tag.label}
                    </motion.span>
                  ))}
                </div>

                {/* 🔗 GitHub Button */}
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="bg-gradient-to-r from-purple-600 to-indigo-500 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform shadow-lg"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <section id="work" className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
      <div>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects
        </h2>
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
