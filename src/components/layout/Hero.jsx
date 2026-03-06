import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Profil from "../../assets/profil.jpg";
import { useNavigate } from "react-router-dom";
import useMobile from "../../hooks/UseMobile";

export default function HeroSection() {
  const isMobile = useMobile(1024);
  const navigate = useNavigate();

  const goToSection = (id, route) => {
    if (isMobile) {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(route);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h2 className="text-3xl font-bold">Veronique Zida Fanta Owona</h2>

          <h1 className="text-5xl md:text-6xl text-purple-400 font-bold leading-tight">
            Fullstack React Developer
          </h1>

          <p className="text-purple-300 font-medium">
            Currently seeking a web development internship, with the possibility
            of taking on freelance projects alongside it.
          </p>

          <p className="text-gray-400 max-w-lg">
            Specialized in modern web development, I build applications using
            React, Node.js, and PHP that are performant, secure, and scalable,
            while placing a strong emphasis on user experience and code quality.
          </p>
           <h3 className="text-xl md:text-2xl font-semibold text-pink-400 mb-4">
  Available for internship, freelance projects,or part-time opportunities while continuing my studies.
</h3>

          {/* Boutons */}
          <div className="flex gap-4 pt-4">
           
            <Button
              variant="primary"
              onClick={() => goToSection("projects", "/projects")}
            >
              View my projects
            </Button>

            <Button
              variant="outline"
              onClick={() => goToSection("contact", "/contact")}
            >
              Contact me
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-72 h-72 bg-purple-600/30 blur-3xl rounded-full pointer-events-none -z-10" />
          <img
            src={Profil}
            alt="Profile"
            className="relative w-60 h-60 rounded-full object-cover border-4 border-white/20 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}