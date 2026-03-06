import Home from "../pages/Home";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Home />
    </motion.div>
  );
}