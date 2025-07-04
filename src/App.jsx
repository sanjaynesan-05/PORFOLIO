import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Section Components
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Designs,
} from "./components";

// Other Components
import Footer from "./components/Footer";

const HomePage = () => (
  <>
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
  </>
);

const ProjectsPage = () => (
  <>
    <Works />
    <Footer />
  </>
);

const DesignsPage = () => (
  <>
    <Designs gradientColor="rgba(255,255,255,0.05)" />
    <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
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
