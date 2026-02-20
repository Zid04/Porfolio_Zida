import React from "react";
import { Badge } from "../ui/badge";
import {
  FaReact, FaNodeJs, FaPhp, FaLaravel, FaBootstrap, FaDocker,
  FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaFigma
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostman } from "react-icons/si"; // icônes sûres

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> }
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "Express", icon: <SiExpress /> }
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
    <section id="skills" className="py-20 bg-black/90 text-white px-6">
      

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {list.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="flex items-center gap-2"
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
