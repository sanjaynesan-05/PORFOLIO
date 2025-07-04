import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import StarBorder from "./StarBorder";

const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Design",
  "Visualization",
];

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTechs =
    activeCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section className="py-14 px-4 sm:px-6">
      <h2 className={`${styles.sectionHeadText} text-center`}>Tech Stack</h2>

      {/* Glowing Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mt-8">
        {categories.map((cat) => (
          <StarBorder
            key={cat}
            as="button"
            color={activeCategory === cat ? "#ffffff" : "#888888"}
            speed="5s"
            thickness={1}
            onClick={() => setActiveCategory(cat)}
            className={`transition-transform duration-300 ${
              activeCategory === cat
                ? "scale-105 ring-2 ring-white"
                : "opacity-80 hover:scale-100"
            }`}
          >
            {cat}
          </StarBorder>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 mt-12 justify-items-center px-6 sm:px-12">
        {filteredTechs.map((tech) => (
          <div
            key={tech.name}
            className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative group hover:scale-110 transition-transform"
          >
            {/* Tooltip */}
            <span className="absolute bottom-full mb-2 text-xs px-2 py-1 bg-black bg-opacity-80 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {tech.name}
            </span>

            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
