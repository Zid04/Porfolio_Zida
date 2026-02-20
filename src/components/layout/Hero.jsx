import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Link } from "react-router-dom";
import Profil from "../../assets/profil.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h2 className="text-2xl md:text-2xl font-bold">
            Veronique Zida Fanta Owona 
          </h2>

          <h1 className="text-6xl md:text-4xl text-purple-400 font-bold">
            Fullstack React Developer.
          </h1>

          <p className="text-gray-400 max-w-lg">
           Specialized in modern web development, I build applications using React, Node.js, and PHP 
           that are performant, secure, and scalable, while placing a strong emphasis on user experience and code quality.
</p>
          <div className="flex gap-4 pt-4"> 
            <Link to="/projects">
            <Button variant="primary" asChild>
             View my projects
            </Button>
            </Link>
<Link to="/contact" >
            <Button variant="outline">
               contact me
            </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-72 h-72 bg-purple-600/30 blur-3xl rounded-full" />

          <img
            src={Profil}
            alt="Profile"
            className="relative w-60 h-60 rounded-full object-cover border-4 border-white/20 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
