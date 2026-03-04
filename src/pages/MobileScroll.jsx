import HomeSection from "../Sections/HomeSection";
import AboutSection from "../Sections/AboutSection";
import ProjectsSection from "../Sections/ProjectsSection";
import ContactSection from "../Sections/ContactSection";

export default function MobileScroll() {
  return (
    <div className="pt-24">
      {/* Home */}
      <section id="home">
        <HomeSection />
      </section>

      {/* About */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Projects */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
