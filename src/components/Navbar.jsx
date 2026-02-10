import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "OUR SERVICES", href: "#services" },
    { name: "PRICING", href: "#pricing" },
    { name: "GET A QUOTE", href: "#quote" },
    { name: "BLOG", href: "#blog" },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo Image */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Mirage Detailing"
              className="h-8 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className="relative text-white text-sm font-semibold tracking-widest group"
              >
                {link.name}

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-white transition-all duration-300
                  ${activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            ))}
          </div>

          {/* Right Button */}
          <div className="hidden lg:flex">
            <a
              href="#quote"
              className="bg-red-600 text-white px-8 py-3 text-sm font-bold tracking-widest hover:bg-red-700 transition"
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
                  ${activeLink === link.href ? "text-red-600" : "hover:text-red-600"}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#quote"
            className="block bg-red-600 text-white text-center py-4 font-bold tracking-widest hover:bg-red-700 transition"
          >
            GET A QUOTE
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
