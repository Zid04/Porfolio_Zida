import React from "react";
import { Separator } from "../ui/separator";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black/80 backdrop-blur-md text-white py-8 px-6 mt-20 relative">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Liens sociaux */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/zid04"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-purple-400 transition"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/veroniquezida-fantaowona"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-purple-400 transition"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>

          <a
            href="https://wa.me/+33780769599"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-purple-400 transition"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Separator */}
      <Separator className="my-6 bg-white/20" />

      {/* Copyright */}
      <p className="text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Veronique Zida Fanta Owona. All rights reserved.
      </p>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-purple-400 text-black p-2 rounded-full hover:bg-purple-500 transition shadow-lg"
        aria-label="Back to top"
      >
        ↑
      </button>

    </footer>
  );
}