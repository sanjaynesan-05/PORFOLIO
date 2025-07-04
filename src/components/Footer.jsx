import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/lordsmagan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://github.com/sanjaynesan-05" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/sanjaynesanj/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;