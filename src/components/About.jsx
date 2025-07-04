import React from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

// 🎴 Service Card (No GSAP / No Tilt)
const ServiceCard = ({ title, icon }) => {
  return (
    <div className="w-full sm:w-[240px]">
      <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-6 px-8 min-h-[260px] flex flex-col items-center justify-center text-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
          <h3 className="text-white text-[18px] font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

// 🧑‍💻 About Section
const About = () => {
  return (
    <div className="w-full">
      <div>
        <h2 className={`${styles.sectionHeadText} text-center`}>About Me</h2>
      </div>

      <div className="mt-6 flex justify-center">
        <p className="text-secondary text-[17px] max-w-3xl leading-[28px] text-center">
          I’m a creative technologist blending design aesthetics with full-stack precision.
          With 3+ years of experience, I build seamless digital products from concept to deployment.
          I specialize in React, Node.js, and design tools like Figma & Adobe Suite.
          I love exploring new technologies, contributing to open source, and sharing knowledge.
          I believe the best digital work happens where logic meets imagination.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
