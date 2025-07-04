// src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="text-white py-8 px-4 bg-black-100/55">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
      
      {/* Left: Name / Branding */}
      <div className="text-lg font-semibold tracking-wide">
        Sanjay Nesan
      </div>

      {/* Center: Made with Love */}
      <div className="text-gray-400">
        Made with ❤️
      </div>

      {/* Right: Copyright */}
      <div className="text-gray-400 text-center md:text-right">
        &copy; {new Date().getFullYear()} Sanjay Nesan. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
