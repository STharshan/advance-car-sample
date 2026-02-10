import React, { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle"; // adjust path if needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "OUR SERVICES", href: "#services" },
    { name: "PRICING", href: "#pricing" },
    { name: "GET A QUOTE", href: "#quote" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveLink(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-8xl px-8 mx-auto">
        <div className="flex items-center justify-between h-24">

          {/* Logo on the left */}
          <div className="shrink-0">
            <img src="/logo.png" alt="Mirage Detailing" className="h-7 object-contain" />
          </div>

          {/* Desktop Menu in center */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className="relative text-white text-secondary-hover hover:font-semibold font-semibold tracking-widest group"
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-2 h-1 bg-white transition-all duration-300
                    ${activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            ))}
          </div>

          {/* "Get a Quote" + Theme Toggle on right */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="#quote"
              className="bg-primary bg-secondary-hover text-white px-6 py-3 text-sm font-bold tracking-widest rounded transition"
            >
              GET A QUOTE
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-6 py-6 space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-white text-sm font-bold tracking-widest border-b border-white/10 pb-2
                  ${activeLink === link.href ? "text-primary" : "text-secondary-hover"}`}
              >
                {link.name}
              </a>
            ))}

            {/* Dark/Light Mode Toggle */}
            <div className="pt-4 flex justify-center">
              <ThemeToggle className="w-full" />
            </div>
          </div>

          <a
            href="#quote"
            className="block bg-primary text-white text-center py-4 font-bold tracking-widest bg-secondary-hover transition"
          >
            GET A QUOTE
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
