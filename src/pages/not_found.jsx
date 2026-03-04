import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white">

      {/* Icône */}
      <div className="w-28 h-28 bg-white/10 rounded-full flex items-center justify-center mb-8 text-pink-400 shadow-lg shadow-pink-500/10">
        <AlertCircle size={56} />
      </div>

      {/* Titre */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
        Page Not Found
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
        The page you are looking for doesn’t exist or may have been moved.
        Let’s get you back on track.
      </p>

      {/* Bouton */}
      <Link to="/">
        <Button
          size="lg"
          className="rounded-full px-10 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition shadow-md shadow-purple-500/20"
        >
          Return to Homepage
        </Button>
      </Link>

    </section>
  );
}
