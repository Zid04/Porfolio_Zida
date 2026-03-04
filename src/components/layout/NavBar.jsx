import React, { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/logoZid.png";
import useMobile from "../../hooks/useMobile";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMobile(1024);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleMobileScroll = (href) => {
    setMobileOpen(false);
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-1 px-2">

        {/* Logo */}
        <div className="cursor-pointer">
          {isMobile ? (
            <button onClick={() => handleMobileScroll("#home")}>
              <img src={logo} alt="Logo" className="w-20 h-20" />
            </button>
          ) : (
            <Link to="/">
              <img src={logo} alt="Logo" className="w-20 h-20" />
            </Link>
          )}
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href.replace("#", "/")}
                className="text-white hover:text-purple-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <Separator orientation="vertical" className="bg-white/30 h-6 mx-2" />

          <Link to="/contact">
            <Button variant="secondary" size="sm" className="text-black">
              Contact Me
            </Button>
          </Link>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col md:hidden bg-black/90 backdrop-blur-md text-center space-y-4 py-4 px-6"
          >
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleMobileScroll(link.href)}
                  className="text-white hover:text-purple-400 transition"
                >
                  {link.name}
                </button>
              </li>
            ))}

            <button onClick={() => handleMobileScroll("#contact")}>
              <Button variant="secondary" size="sm" className="text-black">
                Contact Me
              </Button>
            </button>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
