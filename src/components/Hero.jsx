import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { FaCode, FaPalette, FaRobot, FaBrain, FaRocket } from "react-icons/fa";

import { styles } from "../styles";
import ProfileCard from "./ProfileCard";
import myAvatar from "../assets/me.webp";
import logo from "../assets/logo.webp";

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

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden"
      id="hero"
      aria-label="Hero Banner"
    >
      {/* ✨ Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: "#0f172a" },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: ["#60A5FA", "#A855F7", "#EC4899"] },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 5 } },
            move: { enable: true, speed: 1.5 },
          },
        }}
      />

      {/* 🫧 Glow Blobs */}
      <div className="absolute top-[-4rem] right-[4rem] w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-[-4rem] left-[2rem] w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20" />

      {/* 📌 Main Content */}
      <div
        className={`absolute inset-0 top-[160px] max-w-7xl mx-auto px-5 sm:px-10 flex flex-col lg:flex-row items-center justify-center gap-12`}
      >
        {/* 🚩 Vertical Line */}
        <div className="flex-col justify-center items-center hidden md:flex">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* 👤 Profile Card */}
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

        {/* 🔥 Hero Text */}
        <div className="text-center lg:text-left mt-10 lg:mt-0 max-w-xl px-2 sm:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold text-white leading-snug tracking-tight"
          >
            WELCOME TO THE FUTURE OF{" "}
            <span className="bg-gradient-to-r from-[#4c75f2] via-[#8e44ec] to-[#c471f5] text-transparent bg-clip-text font-extrabold tracking-wider">
              TECHNOLOGIAA
            </span>
          </motion.h1>

          <p className="text-gray-300 mt-4 text-sm sm:text-base">
            I build & brand — crafting fast, functional code and clean design.
            A full-stack developer and visual designer blending art & logic.
          </p>

          <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 font-mono mt-3 mb-6 min-h-[24px]">
            {currentText}
          </p>

          {/* 🧩 Tech Stack Icons */}
          <div className="flex gap-6 text-[#f02d5a] text-xl sm:text-2xl justify-center sm:justify-start mb-6">
            <FaCode title="Full-Stack Developer" />
            <FaPalette title="Graphic Design" />
            <FaRobot title="AI Enthusiast" />
            <FaBrain title="Machine Learning" />
            <FaRocket title="Creative Vision" />
          </div>

          {/* 🎯 CTA Button */}
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
