import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white">
      
      {/* Icône */}
      <div className="w-28 h-28 bg-white/10 rounded-full flex items-center justify-center mb-6 text-pink-400">
        <AlertCircle size={56} />
      </div>

      {/* Titre */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Page not found
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-white/80 max-w-lg mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Bouton retour */}
      <Link href="/">
        <Button size="lg" className="rounded-full px-10 py-3 bg-pink-500 hover:bg-pink-600 text-white">
          Return to homepage
        </Button>
      </Link>

    </section>
  );
}
