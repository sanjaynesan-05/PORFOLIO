// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🔀 Lazy-loaded Components
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Designs = lazy(() => import("./components/Designs"));

// 🧩 Non-lazy (small component)
import Footer from "./components/Footer";

// ⏳ Optional fancy loader
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center text-white text-lg animate-pulse">
    Loading sections...
  </div>
);

// ⛳ HomePage Route
const HomePage = () => (
  <Suspense fallback={<Loader />}>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero />
    </div>
    <About />
    <Tech />
    <Works />
    <Designs gradientColor="rgba(255,255,255,0.05)" />
    <Experience />
    <div className="relative z-0">
      <Contact />
      <Footer />
    </div>
  </Suspense>
);

// 📂 Projects Route
const ProjectsPage = () => (
  <Suspense fallback={<Loader />}>
    <Works />
    <Footer />
  </Suspense>
);

// 🎨 Designs Route
const DesignsPage = () => (
  <Suspense fallback={<Loader />}>
    <Designs gradientColor="rgba(255,255,255,0.05)" />
    <Footer />
  </Suspense>
);

// 🚀 Main App
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Suspense fallback={<Loader />}>
          <Navbar />
        </Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/designs" element={<DesignsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
