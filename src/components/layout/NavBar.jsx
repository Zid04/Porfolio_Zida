import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logoZid.png";
import useMobile from "../../hooks/UseMobile";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMobile(1024);
  const navigate = useNavigate();

  const links = [
    { name: "Home", id: "home", route: "/" },
    { name: "About", id: "about", route: "/about" },
    { name: "Projects", id: "projects", route: "/projects" }
  ];

  // Scroll ou navigation
  const handleClick = (id, route) => {
    setMobileOpen(false);
    if (isMobile) {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(route);
    }
  };

  // Contact bouton
  const goToContact = () => handleClick("contact", "/contact");

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <li key={link.name}>
              <Button variant="ghost" className="text-white hover:text-purple-400" onClick={() => handleClick(link.id, link.route)}>
                {link.name}
              </Button>
            </li>
          ))}
          <Button variant="secondary" size="sm" onClick={goToContact}>
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
      {mobileOpen && (
        <ul className="md:hidden bg-black/90 text-center space-y-4 py-4">
          {links.map((link) => (
            <li key={link.name}>
              <Button
                variant="ghost"
                className="text-white hover:text-purple-400"
                onClick={() => handleClick(link.id, link.route)}
              >
                {link.name}
              </Button>
            </li>
          ))}

          <li>
            <Button
              variant="secondary"
              size="sm"
              onClick={goToContact}
            >
              Contact Me
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
}