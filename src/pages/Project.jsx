import React from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const projects = [
  {
    title: "Agroking",
    description: "Application to showcase the company's services, blog, and products Orderable.",
    tech: ["React", "Node.js", "Tailwind", "MySql", "framer-motion"],
    link: "https://github.com/zid04/Agroking"
  },
  {
    title: "Point Event",
    description: "Showcase website for an event company, featuring the company and its services.",
    tech: ["React", "chakra-ui","Node.js"],
    link: "https://github.com/zid04/Point-Event"
  },
  {
    title: "Management Hotel",
    description: "Hotel management application with reservations, rooms, and inventory tracking.",
    tech: ["Laravel", "React", "Tailwind"],
    link: "https://github.com/zid04/Floberna-Hotel"
  },
    {
    title: "Band NAme Generator",
    description: "Application pour générer des noms de bandes musicales.",
    tech: ["HTML", "Nodejs","Docker"],
    link: "https://github.com/zid04/docker-projet-F-Veronique"
  },
    {
    title: "Cicada GAme",
    description: "Quiz game with a roulette, based on the theme of cybersecurity.",
    tech: ["React","tailwind"],
    link: "https://github.com/zid04/Cicada-Game"
  },
   {
    title: "Track Anime",
    description: "Application for tracking animated series, manga, and movies.",
    tech: ["Laravel", "React", "Tailwind"],
    link: "https://github.com/zid04/Track-Anime"
  },
];


function Projects() {
  return (
    <section id="projects" className="py-20  text-white px-6">
      <h2 className="text-4xl font-bold text-purple-300 text-center mb-12">My Work</h2>
      <p className="text-center text-white/80 mb-12">A collection of my projects reflecting my experience and approach to development.</p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card key={project.title} className="bg-black/70 p-6 hover:bg-black/80 transition">
            <h3 className="text-2xl text-pink-300 font-semibold mb-2">{project.title}</h3>
            <p className="text-white/80 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(project.link, "_blank")}
            >
              View on GitHub
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects; 