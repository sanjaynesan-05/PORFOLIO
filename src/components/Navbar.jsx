import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import { styles } from "../styles";
import { menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);

      if (currentScrollY < 100 && location.pathname === "/") {
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname]);

  useEffect(() => {
    if (location.pathname === "/" && active !== "") {
      setActive("");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = navLinks.map((nav) => nav.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [location.pathname]);

  const handleNavClick = (title, id) => {
    setActive(title);
    setToggle(false);

    if (id === "projects" || id === "designs") {
      navigate(`/${id}`);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full flex items-center py-4 fixed top-0 z-50
        backdrop-blur-md border-b border-white/10 shadow-lg
        transition-all duration-300 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${lastScrollY > 100 ? "bg-white/10" : "bg-transparent"}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            SANJAY NESAN J
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <button
              key={nav.id}
              onClick={() => handleNavClick(nav.title, nav.id)}
              className={`text-white text-sm font-semibold relative transition-all duration-300 hover:text-cyan-400 group ${
                active === nav.id ? "text-cyan-400" : "text-white"
              }`}
            >
              {nav.title}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                  active === nav.id ? "scale-x-100" : ""
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 glassmorphism absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-50 rounded-xl border border-white/10 backdrop-blur-md bg-white/10 shadow-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  onClick={() => handleNavClick(nav.title, nav.id)}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  } hover:text-cyan-400`}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
