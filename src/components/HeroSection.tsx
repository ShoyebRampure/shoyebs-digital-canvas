
import { Linkedin, Github } from "lucide-react";

// Placeholder image from Unsplash (tech theme)
const PROFILE_IMAGE =
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=600&q=80";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[64vh] py-16 bg-background text-white font-inter animate-fade-in"
    >
      <div className="w-full max-w-2xl text-center">
        <div className="flex justify-center mb-6">
          <img
            src={PROFILE_IMAGE}
            alt="Shoyeb Rampure"
            className="rounded-full border-4 border-primary shadow-xl w-36 h-36 object-cover"
            draggable={false}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-3">
          Shoyeb Rampure
        </h1>
        <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
          Engineering Student | AI/ML Enthusiast | Hackathon Winner
        </p>
        <p className="text-base md:text-lg text-muted mb-8">
          shoyebrampure@gmail.com
        </p>
        <div className="flex items-center gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/shoyeb-rampure-584958250/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 bg-primary px-4 py-2 rounded-full inline-flex items-center gap-2 text-white font-medium shadow-glass transition"
          >
            <Linkedin size={22} />
            LinkedIn
          </a>
          <a
            href="https://github.com/ShoyebRampure"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 bg-accent px-4 py-2 rounded-full inline-flex items-center gap-2 text-white font-medium shadow-glass transition"
          >
            <Github size={22} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
