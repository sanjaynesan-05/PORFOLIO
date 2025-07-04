import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

// Reusable GSAP hook
const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

// 🎴 Service Card
const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 100, scale: 0.9 },
      to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    },
    index * 0.2
  );

  return (
    <Tilt className="w-full sm:w-[240px]">
      <div
        ref={cardRef}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-6 px-8 min-h-[260px] flex flex-col items-center justify-center text-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
          <h3 className="text-white text-[18px] font-semibold">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

// 🧑‍💻 About Section
const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  useGsap(
    paragraphRef,
    {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    0.3
  );

  return (
    <div className="w-full">
      <div ref={headingRef}>
        <h2 className={`${styles.sectionHeadText} text-center`}>About Me</h2>
      </div>

      <div className="mt-6 flex justify-center">
        <p
          ref={paragraphRef}
          className="text-secondary text-[17px] max-w-3xl leading-[28px] text-center"
        >
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
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
