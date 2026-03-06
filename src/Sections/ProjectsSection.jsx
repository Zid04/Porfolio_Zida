import Project from "../pages/Project";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Project />
    </motion.div>
  );
}