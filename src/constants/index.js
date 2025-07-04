// 🌟 Icons & Logos
import creator from "../assets/creator.webp";
import web from "../assets/web.webp";
import JSN from "../assets/company/JSN.webp";
import Infomedia from "../assets/company/Infomedia.webp";
import nandainfotech from "../assets/company/nandainfotech.webp";

// 🖼️ Project Images
import project2 from "../assets/kebaluxe.webp";
import project3 from "../assets/airquality.webp";
import gearXpert from "../assets/car_rental.webp";
import geofence from "../assets/geofence.webp";

// 🛠️ Tech Stack
import html from "../assets/tech/html.webp";
import css from "../assets/tech/css.webp";
import javascript from "../assets/tech/javascript.webp";
import typescript from "../assets/tech/typescript.webp";
import react from "../assets/tech/reactjs.webp";
import nextjs from "../assets/tech/nextapi.webp";
import fastapi from "../assets/tech/fastapi.webp";
import github from "../assets/tech/github.webp";
import mongodb from "../assets/tech/mongodb.webp";
import mysql from "../assets/tech/mysql.webp";
import firebase from "../assets/tech/firebase.webp";
import nodejs from "../assets/tech/nodejs.webp";
import express from "../assets/tech/express.webp";
import tailwind from "../assets/tech/tailwind.webp";
import materialui from "../assets/tech/mui.webp";
import framer from "../assets/tech/framer.webp";
import threejs from "../assets/tech/threejs.webp";
import git from "../assets/tech/git.webp";
import figma from "../assets/tech/figma.webp";
import canva from "../assets/tech/canva.webp";
import photoshop from "../assets/tech/photoshop.webp";
import illustrator from "../assets/tech/illustrator.webp";
import tableau from "../assets/tech/tableau.webp";
import python from "../assets/tech/python.webp";
import java from "../assets/tech/java.webp";
import cplus from "../assets/tech/c.webp";
import powerbi from "../assets/tech/powerbi.webp";

// 🌐 Navigation Links
export const navLinks = [
  { id: "about", title: "About" },
  { id: "tech", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "designs", title: "Designs" },
  { id: "contact", title: "Contact" },
];


// 👨‍💻 Services
export const services = [
  { title: "Full-Stack Developer", icon: creator },
  { title: "UI/UX Designer", icon: web },
];

// 💻 Technologies
export const technologies = [
  { name: "Python", icon: python, category: "Languages" },
  { name: "Java", icon: java, category: "Languages" },
  { name: "C++", icon: cplus, category: "Languages" },
  { name: "JavaScript", icon: javascript, category: "Languages" },
  { name: "TypeScript", icon: typescript, category: "Languages" },

  { name: "HTML 5", icon: html, category: "Frontend" },
  { name: "CSS 3", icon: css, category: "Frontend" },
  { name: "React JS", icon: react, category: "Frontend" },
  { name: "Next.js", icon: nextjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwind, category: "Frontend" },
  { name: "Framer Motion", icon: framer, category: "Frontend" },

  { name: "Node JS", icon: nodejs, category: "Backend" },
  { name: "Express JS", icon: express, category: "Backend" },
  { name: "FastAPI", icon: fastapi, category: "Backend" },

  { name: "MongoDB", icon: mongodb, category: "Database" },
  { name: "MySQL", icon: mysql, category: "Database" },
  { name: "Firebase", icon: firebase, category: "Database" },

  { name: "Git", icon: git, category: "Tools" },
  { name: "GitHub", icon: github, category: "Tools" },

  { name: "Figma", icon: figma, category: "Design" },
  { name: "Canva", icon: canva, category: "Design" },
  { name: "Adobe Photoshop", icon: photoshop, category: "Design" },
  { name: "Adobe Illustrator", icon: illustrator, category: "Design" },

  { name: "Tableau", icon: tableau, category: "Visualization" },
  { name: "PowerBI", icon: powerbi, category: "Visualization" },
];

// 🧑‍💼 Experiences
export const experiences = [
  {
    title: "Graphic Designer",
    company_name: "Freelancing",
    icon: JSN,
    iconBg: "#383E56",
    date: "2023 - present",
    points: [
      "Designed logos, posters, banners, and social media graphics for events and campaigns",
      "Created visually engaging content using Figma, Canva, and Adobe Photoshop",
      "Worked on UI mockups and design systems for web and mobile platforms",
      "Delivered brand-consistent designs tailored to client and project needs",
      "Managed revisions, feedback, and communication independently with clients",
    ],
  },
  {
    title: "Data Visualization & Analysis Intern",
    company_name: "Infomedia Services",
    icon: Infomedia,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Completed hands-on training in data visualization and analytical techniques",
      "Worked collaboratively on team-based data projects and dashboards",
      "Demonstrated sincerity, dedication, and result-oriented mindset",
      "Practiced real-world problem solving with data tools and visual platforms",
      "Appreciated for work ethic and contribution during the internship",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Nandha Info Tech",
    icon: nandainfotech,
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    points: [
      "Contributed to both frontend and backend development of web applications",
      "Built features using React, Node.js, and MongoDB",
      "Collaborated with senior developers in agile sprints",
      "Performed debugging, testing, and documentation tasks",
      "Gained exposure to full-stack workflows and deployment processes",
    ],
  },
];

// 🚀 Projects
export const projects = [
  {
    name: "KEBA LUXE",
    description: "An elegant e-commerce platform with full product, cart, and order management built using React and Tailwind.",
    tags: [
      { label: "React", icon: "fab fa-react", color: "blue-text-gradient" },
      { label: "Tailwind CSS", icon: "fas fa-paint-brush", color: "white-text-gradient" },
      { label: "Framer Motion", icon: "fas fa-wave-square", color: "pink-text-gradient" },
      { label: "MongoDB", icon: "fas fa-database", color: "green-text-gradient" },
      { label: "FastAPI", icon: "fas fa-server", color: "purple-text-gradient" },
      { label: "TypeScript", icon: "fas fa-code", color: "white-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/sanjaynesan-05/KEBA-E-COMMERCE.git",
  },
  {
    name: "CAR RENTO",
    description: "A lightweight car rental web system using HTML, CSS, and vanilla JS with live booking and rental tracking features.",
    tags: [
      { label: "HTML5", icon: "fab fa-html5", color: "orange-text-gradient" },
      { label: "CSS3", icon: "fab fa-css3-alt", color: "blue-text-gradient" },
      { label: "JavaScript", icon: "fab fa-js-square", color: "yellow-text-gradient" },
      { label: "LocalStorage", icon: "fas fa-database", color: "white-text-gradient" },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/sanjaynesan-05/car-rental-system.git",
  },
  {
    name: "AIR QUALITY MONITORING",
    description: "A real-time IoT-based indoor air monitoring dashboard powered by FastAPI and MongoDB.",
    tags: [
      { label: "React", icon: "fab fa-react", color: "blue-text-gradient" },
      { label: "Tailwind CSS", icon: "fas fa-paint-brush", color: "white-text-gradient" },
      { label: "FastAPI", icon: "fas fa-server", color: "green-text-gradient" },
      { label: "MongoDB Atlas", icon: "fas fa-database", color: "white-text-gradient" },
      { label: "Chart.js", icon: "fas fa-chart-bar", color: "pink-text-gradient" },
      { label: "Recharts", icon: "fas fa-chart-line", color: "yellow-text-gradient" },
      { label: "Framer Motion", icon: "fas fa-wave-square", color: "purple-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/sanjaynesan-05/AIR-QUALITY-MONITORING.git",
  },
  {
    name: "GEO FENCE SYSTEM",
    description: "An intelligent NDVI geofencing app built with Flask and Leaflet.js for satellite-based green zone analysis.",
    tags: [
      { label: "HTML5", icon: "fab fa-html5", color: "orange-text-gradient" },
      { label: "CSS3", icon: "fab fa-css3-alt", color: "blue-text-gradient" },
      { label: "Leaflet.js", icon: "fas fa-map", color: "green-text-gradient" },
      { label: "Turf.js", icon: "fas fa-draw-polygon", color: "yellow-text-gradient" },
      { label: "Flask", icon: "fas fa-flask", color: "pink-text-gradient" },
      { label: "Python", icon: "fab fa-python", color: "blue-text-gradient" },
      { label: "SQLite", icon: "fas fa-database", color: "white-text-gradient" },
      { label: "Earth Engine", icon: "fas fa-globe", color: "green-text-gradient" },
    ],
    image: geofence,
    source_code_link: "https://github.com/sanjaynesan-05/GEOFENCE.git",
  },
];




// ✅ Component Re-exports
export { default as Navbar } from "../components/Navbar";
export { default as Hero } from "../components/Hero";
export { default as About } from "../components/About";
export { default as Tech } from "../components/Tech";
export { default as Experience } from "../components/Experience";
export { default as Works } from "../components/Works";
export { default as Contact } from "../components/Contact";
export { default as Designs } from "../components/Designs";
