import React from "react";
import Skills from "../components/layout/Skills";
import { Button } from "../components/ui/button";
import Illustration from "../assets/illustration.jpg";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useMobile from "../hooks/UseMobile";

const formations = [
  { year: "2025-2026", title: "Bachelor 3 de Développement Web", school: "My Digital School" },
  { year: "2021-2024", title: "BTS en Génie Logiciel", school: "ISSTMADD" }
];

const experiences = [
  {
    year: "2022",
    title: "Stage en conception génie logiciel",
    company: "ASM Afrik",
    description: "Conception et développement d’une application de gestion hôtelière."
  }
];

function About() {
  const navigate = useNavigate();
  const isMobile = useMobile(1024);

  const goToProjects = () => {
    if (isMobile) {
      const section = document.querySelector("#projects");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/projects");
    }
  };

  return (
    <section id="about" className="relative py-20 px-6 text-white overflow-hidden">

      {/* Titre principal */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-purple-300">About Me</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Learn more about my background, skills, and professional journey.
        </p>
      </div>

      {/* Présentation */}
      <div className="flex flex-col md:flex-row items-stretch gap-12 max-w-6xl mx-auto mb-24">
        
        {/* Texte */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold text-purple-200">Who am I?</h2>

          <p className="text-white/80 leading-relaxed">
            I am a fullstack developer specialized in building modern, scalable and high‑performance web applications.
            With a dual expertise in design and development, I focus on creating digital products that are both functional and visually appealing.
          </p>

          <p className="text-white/80 leading-relaxed">
            My journey has allowed me to work on diverse projects, from requirement analysis to deployment, including UI/UX prototyping and component‑based architecture.
          </p>

          <Button
            size="sm"
            className="mt-2 w-fit rounded-full px-6 py-2 bg-pink-500 hover:bg-pink-600 transition"
            onClick={goToProjects}
          >
            See my work
          </Button>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={Illustration}
            alt="About illustration"
            className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl opacity-90 shadow-xl shadow-purple-500/10"
          />
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-300">My Skills</h2>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10">
          <Skills />
        </div>
      </div>

      {/* Formations & Expériences */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">

        {/* Formations */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-purple-300">
            <FaGraduationCap /> Formations
          </h3>

          <ul className="space-y-5">
            {formations.map((f) => (
              <li key={f.year}>
                <p className="font-bold text-white">{f.year} – {f.title}</p>
                <p className="text-white/70">{f.school}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Expériences */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-pink-300">
            <FaBriefcase /> Expériences
          </h3>

          <ul className="space-y-5">
            {experiences.map((e) => (
              <li key={e.year}>
                <p className="font-bold text-white">{e.year} – {e.title}</p>
                <p className="text-white/70">{e.company}</p>
                <p className="text-white/70">{e.description}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </section>
  );
}

export default About;
