import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faRobot,
  faBrain,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import { styles } from "../styles";
import ProfileCard from "./ProfileCard";
import myAvatar from "../assets/me.webp";
import logo from "../assets/logo.webp";
import heroBg from "../assets/herobg.webp";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "🧠 I don’t just build apps — I engineer experiences.",
    "🎯 Design sharp. Code sharper.",
    "📐 Every pixel, every line — with purpose.",
    "🚀 React. FastAPI. Tailwind. TypeScript.",
    "🎨 UI/UX • Motion • Brand Identity • Speed",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden"
      id="hero"
      aria-label="Hero Banner"
    >
      {/* ✅ Eager loaded hero background image */}
      <img
        src={heroBg}
        alt="Hero Background"
        width="1200"
        height="630"
        fetchpriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        style={{ objectPosition: "center" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="absolute inset-0 top-[160px] max-w-7xl mx-auto px-5 sm:px-10 flex flex-col lg:flex-row items-center justify-center gap-12 z-10">

        {/* Profile Card */}
        <div className="relative transform scale-[0.85] md:scale-100 transition-transform duration-300">
          <ProfileCard
            avatarUrl={myAvatar}
            iconUrl="/assets/icon.png"
            grainUrl="/assets/grain.png"
            miniAvatarUrl={logo}
            name="Sanjay Nesan J"
            title="Full Stack Developer & Graphic Designer"
            handle="sanjuu"
            status="Online"
            contactText="Let's Connect"
            onContactClick={() => (window.location.href = "#contact")}
          />
        </div>

        {/* Hero Text */}
        <div className="text-center lg:text-left mt-10 lg:mt-0 max-w-xl px-2 sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold text-white leading-snug tracking-tight">
            WELCOME TO THE FUTURE OF{" "}
            <span className="bg-gradient-to-r from-[#4c75f2] via-[#8e44ec] to-[#c471f5] text-transparent bg-clip-text font-extrabold tracking-wider">
              TECHNOLOGIAA
            </span>
          </h1>

          <p className="text-gray-300 mt-4 text-sm sm:text-base">
            I build & brand — crafting fast, functional code and clean design.
            A full-stack developer and visual designer blending art & logic.
          </p>

          <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 font-mono mt-3 mb-6 min-h-[24px]">
            {currentText}
          </p>

          <div className="flex gap-6 text-[#f02d5a] text-xl sm:text-2xl justify-center sm:justify-start mb-6">
            <FontAwesomeIcon icon={faCode} title="Full-Stack Developer" />
            <FontAwesomeIcon icon={faPalette} title="Graphic Design" />
            <FontAwesomeIcon icon={faRobot} title="AI Enthusiast" />
            <FontAwesomeIcon icon={faBrain} title="Machine Learning" />
            <FontAwesomeIcon icon={faRocket} title="Creative Vision" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-7 py-3 font-semibold text-white backdrop-blur-sm bg-gradient-to-r from-blue-600/60 to-purple-700/60 border border-white/20 rounded-full shadow-lg transition duration-300 ease-in-out hover:backdrop-blur-lg hover:bg-white/10 hover:scale-105 active:scale-100"
              aria-label="View Projects"
            >
              <span className="absolute inset-0 w-full h-full rounded-full bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2 tracking-wide">
                View My Work
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
