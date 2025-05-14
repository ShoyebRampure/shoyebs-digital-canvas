
import { Linkedin, Github } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 bg-background text-white font-inter animate-fade-in"
    >
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Shoyeb Rampure
        </h1>
        <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
          Engineering Student | AI/ML Enthusiast | Hackathon Winner
        </p>
        <p className="text-base md:text-lg text-muted mb-8">
          Highly motivated Information Science Engineering student passionate about AI/ML, IoT, and building innovative, data-driven solutions.
        </p>
        <div className="flex items-center gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/shoyeb-rampure-584958250/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 bg-primary px-4 py-2 rounded-full inline-flex items-center gap-2 text-white font-medium shadow-glass"
          >
            <Linkedin size={22} />
            LinkedIn
          </a>
          <a
            href="https://github.com/ShoyebRampure"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 bg-accent px-4 py-2 rounded-full inline-flex items-center gap-2 text-white font-medium shadow-glass"
          >
            <Github size={22} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
