import React from "react";
import { Badge } from "../ui/badge";
import {
  FaReact, FaNodeJs, FaPhp, FaLaravel, FaBootstrap, FaDocker,
  FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaFigma
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostman } from "react-icons/si";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> }
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "MySQL", icon: <FaDatabase /> }
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Figma", icon: <FaFigma /> }
  ]
};

function Skills() {
  return (
    <section id="skills" className="py-20 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-400">Skills & Technologies</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Technologies I use to build modern, scalable and user‑focused applications.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {list.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="flex items-center gap-2 px-3 py-2 text-black bg-white hover:bg-purple-200 transition"
                >
                  {skill.icon}
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
