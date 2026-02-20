import React from "react";
import Skills from "../components/layout/Skills";
import { Button } from "../components/ui/button";
import Illustration from "../assets/illustration.jpg";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const formations = [
  { year: "2025-2026", title: "Bachelor 3 de Développement Web", school: "My Digital School" },
  { year: "2021-2024", title: "Bts en Genie Logiciel", school: "ISSTMADD" }
];

const experiences = [
  {
    year: "2022",
    title: "Stage en conception genie logiciel",
    company: "ASM Afrik",
    description: "Conception et développement d’une application de gestion hoteliere."
  }
];

function About() {
  return (
    <section id="about" className="relative py-20 px-6 text-white overflow-hidden">

      <div className="flex flex-col md:flex-row items-stretch gap-12 max-w-6xl mx-auto mb-20">

        {/* Présentation */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-4xl font-bold text-purple-300">Who am I?</h1>
          <p className="text-white/80 leading-relaxed">
            I am a fullstack developer specialized in building modern and high-performance web applications.
            With a dual expertise in design and development, I strive to design products that are not only functional but also visually appealing.
            <br />
            My journey has allowed me to work on diverse projects, from in-depth requirement analysis to final deployment, including UI/UX prototyping.
          </p>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={Illustration}
            alt="Illustration About"
            className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl opacity-90"
          />
        </div>

      </div>

      {/* ===== Section Skills + Formation + Expériences ===== */}
      <div className="flex flex-col items-center gap-12 max-w-6xl mx-auto">

        {/* Skills */}
        <div className="w-full max-w-5xl bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <h2 className="text-4xl font-bold mb-6 text-center">My Skills</h2>
          <Skills />
        </div>

        {/* Formations & Expériences */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Formations */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-purple-300">
              <FaGraduationCap /> Formations
            </h3>
            <ul className="space-y-4">
              {formations.map((f) => (
                <li key={f.year}>
                  <p className="font-bold">{f.year} – {f.title}</p>
                  <p className="text-white/70">{f.school}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Expériences */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-pink-300">
              <FaBriefcase /> Expériences
            </h3>
            <ul className="space-y-4">
              {experiences.map((e) => (
                <li key={e.year}>
                  <p className="font-bold">{e.year} – {e.title}</p>
                  <p className="text-white/70">{e.company}</p>
                  <p className="text-white/70">{e.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
 <div className="mt-6 flex md:justify-start justify-center">
            <Button
              size="sm"
              className="rounded-full px-6 py-2 bg-pink-500 hover:bg-pink-600 transition"
              onClick={() => window.location.href="/projects"}
            >
              See my work
            </Button>
          </div>
      </div>

    </section>
  );
}

export default About;
