import React from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Agroking",
    description: "Application to showcase the company's services, blog, and products with ordering features.",
    tech: ["React", "Node.js", "Tailwind", "MySQL", "Framer Motion"],
    link: "https://github.com/zid04/Agroking",
    image: "/projects/agroking.png"
  },
  {
    title: "Point Event",
    description: "Showcase website for an event company, featuring services and company presentation.",
    tech: ["React", "Chakra UI", "Node.js"],
    link: "https://github.com/zid04/Point-Event",
    image: "/projects/pointevent.png"
  },
  {
    title: "Management Hotel",
    description: "Hotel management application with reservations, rooms, and inventory tracking.",
    tech: ["Laravel", "React", "Tailwind"],
    link: "https://github.com/zid04/Floberna-Hotel",
    image: "/projects/hotel.png"
  },
  {
    title: "Band Name Generator",
    description: "Simple app to generate random band names.",
    tech: ["HTML", "Node.js", "Docker"],
    link: "https://github.com/zid04/docker-projet-F-Veronique",
    image: "/projects/band.png"
  },
  {
    title: "Cicada Game",
    description: "Cybersecurity-themed quiz game with roulette mechanics.",
    tech: ["React", "Tailwind"],
    link: "https://github.com/zid04/Cicada-Game",
    image: "/projects/cicada.png"
  },
  {
    title: "Track Anime",
    description: "Application for tracking anime, manga, and movies.",
    tech: ["Laravel", "React", "Tailwind"],
    link: "https://github.com/zid04/Track-Anime",
    image: "/projects/trackanime.png"
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 text-white px-6">
      
      {/* Titre */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-300">My Work</h2>
        <p className="text-white/80 mt-3 max-w-2xl mx-auto">
          A selection of projects that showcase my experience in fullstack development, UI/UX, and scalable architecture.
        </p>
      </div>

      {/* Grille */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="bg-black/70 border border-white/10 rounded-xl overflow-hidden 
                       hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-500/10 
                       transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-40 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 
                           hover:opacity-100 transition duration-300"
              />
            </div>

            {/* Contenu */}
            <div className="p-6">
              <h3 className="text-2xl text-pink-300 font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-white/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm bg-white/10 border border-white/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Bouton */}
              <Button
                variant="primary"
                size="sm"
                className="flex items-center gap-2 rounded-full px-5 py-2 
                           bg-gradient-to-r from-purple-600 to-pink-600 
                           hover:opacity-90 transition"
                onClick={() => window.open(project.link, "_blank")}
              >
                View on GitHub <ExternalLink size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
