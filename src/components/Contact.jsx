import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_t9jq533",
        "template_6fv45q2",
        {
          from_name: form.name,
          to_name: "Sanjay Nesan",
          from_email: form.email,
          to_email: "sanjaynesan007@gmail.com",
          message: form.message,
        },
        "BICB0XdFatcyTeTky"
      )
      .then(
        () => {
          setLoading(false);
          alert("✅ Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("❌ EmailJS Error:", error);
          alert("❌ Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="relative overflow-hidden text-white py-20 px-4 sm:px-6 bg-black-gradient">

      <h2 className="relative z-20 text-4xl sm:text-5xl font-extrabold mb-6 text-white text-center">
        Contact
      </h2>

      <div className="relative z-20 flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-10 border border-white/10 shadow-lg">
        {/* 📥 Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full lg:w-1/2"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-white/10 p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-white/10 p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-white/10 p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* 🌐 Contact Info */}
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h3>
          <a
            href="mailto:sanjaynesan007@gmail.com"
            className="flex items-center gap-2 text-gray-300 mb-2 hover:underline hover:text-blue-400 transition w-fit"
          >
            <FontAwesomeIcon icon={faEnvelope} /> sanjaynesan007@gmail.com
          </a>
          <a
            href="tel:+919944064709"
            className="flex items-center gap-2 text-gray-300 mb-6 hover:underline hover:text-green-400 transition w-fit"
          >
            <FontAwesomeIcon icon={faPhone} /> +91 99440 64709
          </a>

          <h4 className="text-2xl font-medium mb-4 text-white">Follow me</h4>
          <div className="flex gap-5 flex-wrap text-2xl text-gray-400">
            <a
              href="https://linkedin.com/in/sanjaynesanj"
              target="_blank"
              className="hover:text-[#0077b5] transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/sanjaynesan-05"
              target="_blank"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://instagram.com/lordsmagan"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
