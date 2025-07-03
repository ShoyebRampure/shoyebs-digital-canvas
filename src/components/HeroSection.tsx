import { Linkedin, Github } from "lucide-react";

const PROFILE_IMAGE = "profile.jpg";

export function HeroSection() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap');

          @font-face {
            font-family: 'HarryP';
            src: url('https://cdn.jsdelivr.net/gh/Geeksltd/HP-Fonts/HarryPotter.ttf') format('truetype');
          }

          .font-harry {
            font-family: 'HarryP', 'IM Fell English SC', serif;
          }

          .text-glow {
            text-shadow: 0 0 6px #FFD700, 0 0 12px #ecb939;
          }

          .bg-hero {
            background: radial-gradient(ellipse at center, #1c1c1c 0%, #000000 100%);
            position: relative;
            overflow: hidden;
          }

          .btn-hogwarts {
            border: 1px solid #FFD700;
            background: linear-gradient(to right, #6a3805, #FFD700);
            color: #1a1a1a;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .btn-hogwarts:hover {
            background: linear-gradient(to right, #FFD700, #6a3805);
            transform: scale(1.08);
            box-shadow: 0 0 12px #FFD700aa;
          }

          .btn-slytherin {
            background: linear-gradient(to right, #0b3d2e, #0ec979);
            color: white;
            font-weight: 600;
            border: 1px solid #0ec979;
          }

          .btn-slytherin:hover {
            transform: scale(1.08);
            box-shadow: 0 0 10px #0ec979aa;
          }

          .shadow-wand {
            box-shadow: 0 0 20px #FFD70088;
          }

          .parchment {
            color: #fdf6e3;
          }

          /* Magic sparkles */
          .magic-sparkle {
            position: absolute;
            width: 6px;
            height: 6px;
            background: #FFD700;
            border-radius: 50%;
            animation: float 6s infinite ease-in-out;
            opacity: 0.7;
          }

          @keyframes float {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-60px) scale(1.2);
              opacity: 1;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 0.6;
            }
          }
        `}
      </style>

      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-[80vh] py-20 bg-hero text-white font-harry animate-fade-in"
      >
        {/* Magical floating particles */}
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="magic-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}

        <div className="w-full max-w-2xl text-center z-10">
          <div className="flex justify-center mb-6">
            <img
              src={PROFILE_IMAGE}
              alt="Shoyeb Rampure"
              className="rounded-full border-4 border-yellow-400 shadow-wand w-36 h-36 object-cover"
              draggable={false}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-harry text-glow mb-4">
            Shoyeb Rampure
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-500 font-medium mb-2">
            🧙‍♂️ Engineering Wizard | AI/ML Alchemist | Spellcasting Hackathoner
          </p>
          <p className="text-base md:text-lg text-yellow-200 mb-8 font-inter">
            📜 shoyebrampure@gmail.com
          </p>
          <div className="flex items-center gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/shoyeb-rampure-584958250/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hogwarts px-5 py-2 rounded-full inline-flex items-center gap-2 shadow transition"
            >
              <Linkedin size={22} />
              LinkedIn
            </a>
            <a
              href="https://github.com/ShoyebRampure"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slytherin px-5 py-2 rounded-full inline-flex items-center gap-2 shadow transition"
            >
              <Github size={22} />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
