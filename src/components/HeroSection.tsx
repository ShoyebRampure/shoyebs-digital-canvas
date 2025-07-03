import { Linkedin, Github } from "lucide-react";
import { useState, useEffect } from "react";

const PROFILE_IMAGE = "profile.jpg";

export function HeroSection() {
  const [wandEffect, setWandEffect] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSpellCasting, setIsSpellCasting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const castSpell = () => {
    setIsSpellCasting(true);
    setWandEffect(true);
    setTimeout(() => {
      setIsSpellCasting(false);
      setWandEffect(false);
    }, 2000);
  };

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
            position: relative;
            overflow: hidden;
          }

          .btn-hogwarts:hover {
            background: linear-gradient(to right, #FFD700, #6a3805);
            transform: scale(1.08);
            box-shadow: 0 0 12px #FFD700aa;
          }

          .btn-hogwarts::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transform: rotate(45deg);
            transition: all 0.5s;
            opacity: 0;
          }

          .btn-hogwarts:hover::before {
            animation: shimmer 0.6s ease-in-out;
          }

          .btn-slytherin {
            background: linear-gradient(to right, #0b3d2e, #0ec979);
            color: white;
            font-weight: 600;
            border: 1px solid #0ec979;
            position: relative;
            overflow: hidden;
          }

          .btn-slytherin:hover {
            transform: scale(1.08);
            box-shadow: 0 0 10px #0ec979aa;
          }

          .btn-slytherin::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transform: rotate(45deg);
            transition: all 0.5s;
            opacity: 0;
          }

          .btn-slytherin:hover::before {
            animation: shimmer 0.6s ease-in-out;
          }

          .shadow-wand {
            box-shadow: 0 0 20px #FFD70088;
          }

          .hero-glow-box {
            background: rgba(255, 253, 208, 0.05);
            backdrop-filter: blur(6px);
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid rgba(255, 215, 0, 0.15);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.08);
            transition: all 0.3s ease-in-out;
            position: relative;
            overflow: hidden;
          }

          .hero-glow-box:hover {
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.2);
          }

          .magic-sparkle {
            position: absolute;
            width: 6px;
            height: 6px;
            background: #FFD700;
            border-radius: 50%;
            animation: float 6s infinite ease-in-out;
            opacity: 0.7;
          }

          .shooting-star {
            position: absolute;
            width: 3px;
            height: 3px;
            background: #FFD700;
            border-radius: 50%;
            animation: shootingStar 4s infinite linear;
          }

          .lightning-bolt {
            position: absolute;
            width: 2px;
            height: 40px;
            background: linear-gradient(to bottom, #FFD700, #FFA500);
            opacity: 0;
            animation: lightning 3s infinite;
          }

          .wand-trail {
            position: absolute;
            width: 300px;
            height: 2px;
            background: linear-gradient(to right, transparent, #FFD700, transparent);
            opacity: 0;
            animation: wandTrail 2s ease-out;
          }

          .spell-circle {
            position: absolute;
            width: 200px;
            height: 200px;
            border: 2px solid #FFD700;
            border-radius: 50%;
            opacity: 0;
            animation: spellCircle 2s ease-out;
          }

          .profile-magical {
            position: relative;
            transition: all 0.5s ease;
          }

          .profile-magical:hover {
            transform: scale(1.05) rotate(5deg);
            filter: brightness(1.1);
          }

          .profile-magical::before {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            border: 2px solid #FFD700;
            border-radius: 50%;
            opacity: 0;
            animation: profileGlow 3s infinite;
          }

          .hogwarts-letter {
            position: absolute;
            width: 40px;
            height: 30px;
            background: #f4f1e8;
            border: 1px solid #8B4513;
            animation: floatingLetter 8s infinite ease-in-out;
            opacity: 0.8;
          }

          .magical-cursor {
            position: absolute;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #FFD700, transparent);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.6;
            transition: all 0.1s ease;
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%) rotate(45deg); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%) rotate(45deg); opacity: 0; }
          }

          @keyframes float {
            0% { transform: translateY(0) scale(1); opacity: 0.6; }
            50% { transform: translateY(-60px) scale(1.2); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 0.6; }
          }

          @keyframes shootingStar {
            0% { transform: translateX(-100px) translateY(100px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(100vw) translateY(-100px); opacity: 0; }
          }

          @keyframes lightning {
            0%, 90%, 100% { opacity: 0; }
            5%, 15% { opacity: 1; }
          }

          @keyframes wandTrail {
            0% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1.2); }
          }

          @keyframes spellCircle {
            0% { opacity: 0; transform: scale(0) rotate(0deg); }
            50% { opacity: 1; transform: scale(1) rotate(180deg); }
            100% { opacity: 0; transform: scale(1.5) rotate(360deg); }
          }

          @keyframes profileGlow {
            0%, 100% { opacity: 0; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
          }

          @keyframes floatingLetter {
            0% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(5deg); }
            50% { transform: translateY(0) rotate(0deg); }
            75% { transform: translateY(-15px) rotate(-5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }

          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }

          .typewriter {
            overflow: hidden;
            border-right: 0.15em solid #FFD700;
            white-space: nowrap;
            animation: typewriter 3s steps(40, end), blink-caret 0.75s step-end infinite;
            display: inline-block;
          }

          @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: #FFD700; }
          }

          .spell-cast {
            animation: spellPulse 2s ease-out;
          }

          @keyframes spellPulse {
            0% { transform: scale(1); filter: brightness(1); }
            50% { transform: scale(1.05); filter: brightness(1.3); }
            100% { transform: scale(1); filter: brightness(1); }
          }
        `}
      </style>

      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-[90vh] py-20 bg-hero text-white font-harry animate-fade-in"
      >
        {/* Magical cursor follower */}
        <div 
          className="magical-cursor"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
        />

        {/* Floating Hogwarts letters */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`letter-${i}`}
            className="hogwarts-letter"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}

        {/* Lightning bolts */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`lightning-${i}`}
            className="lightning-bolt"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="shooting-star"
            style={{
              top: `${Math.random() * 30}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Magical floating particles */}
        {[...Array(25)].map((_, i) => (
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

        {/* Spell effects */}
        {wandEffect && (
          <>
            <div
              className="wand-trail"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <div
              className="spell-circle"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </>
        )}

        <div className={`hero-glow-box z-10 text-center ${isSpellCasting ? 'spell-cast' : ''}`}>
          <div className="flex justify-center mb-6">
            <div className="profile-magical">
              <img
                src={PROFILE_IMAGE}
                alt="Shoyeb Rampure"
                className="rounded-full border-4 border-yellow-400 shadow-wand w-36 h-36 object-cover cursor-pointer"
                draggable={false}
                onClick={castSpell}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-harry text-glow mb-4 hover:scale-105 transition-transform duration-300">
            <span className="typewriter">Shoyeb Rampure</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-yellow-500 font-medium mb-2 hover:text-yellow-400 transition-colors duration-300">
            🧙‍♂️ Engineering Wizard | AI/ML Alchemist | Spellcasting Hackathoner
          </p>
          
          <p className="text-base md:text-lg text-yellow-200 mb-8 font-inter hover:text-yellow-100 transition-colors duration-300">
            📜 shoyebrampure@gmail.com
          </p>

          {/* Magical spell casting button */}
          <div className="mb-6">
            <button
              onClick={castSpell}
              className="px-6 py-3 bg-purple-800 hover:bg-purple-700 text-white rounded-full font-harry text-lg transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50"
            >
              ✨ Cast Spell ✨
            </button>
          </div>

          <div className="flex items-center gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/shoyeb-rampure-584958250/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hogwarts px-5 py-2 rounded-full inline-flex items-center gap-2 shadow transition group"
            >
              <Linkedin size={22} className="group-hover:animate-bounce" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ShoyebRampure"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slytherin px-5 py-2 rounded-full inline-flex items-center gap-2 shadow transition group"
            >
              <Github size={22} className="group-hover:animate-spin" />
              GitHub
            </a>
          </div>

          {/* Magical status indicator */}
          <div className="mt-6 text-yellow-300 text-sm opacity-70">
            {isSpellCasting ? "🔮 Casting spell..." : "🪄 Click profile or spell button for magic!"}
          </div>
        </div>
      </section>
    </>
  );
}