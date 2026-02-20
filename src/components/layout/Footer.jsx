import React from "react";
import { Separator } from "../ui/separator";

function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md text-white py-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Liens sociaux */}
        <div className="flex space-x-6">
          <a href="https://github.com/zid04" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">GitHub</a>
          <a href="https://linkedin.com/in/veroniquezida-fantaowona" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">LinkedIn</a>
          <a href="https://wa.me/+33780769599" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">WhatsApp</a>
        </div>

      </div>

      {/* Separator */}
      <Separator className="my-6 bg-white/20" />

      {/* Copyright */}
      <p className="text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Veronique Zida Fanta Owona. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
