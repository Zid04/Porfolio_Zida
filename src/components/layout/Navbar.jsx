import React, { useState } from "react";
import { Button}  from "../ui/button";
import  {Separator} from "../ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logoZid.png"; 

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Project", href: "/Project" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-1 px-2">
        
        {/* Logo seul */}
        <div className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-purple-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Separator orientation="vertical" className="bg-white/30 h-6 mx-2" />
          <Button
            variant="default"
            size="sm"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Me
          </Button>
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
                <a
                  href={link.href}
                  className="text-white hover:text-purple-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                window.location.href = "/contact";
                setMobileOpen(false);
              }}
            >
              Contact Me
            </Button>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
