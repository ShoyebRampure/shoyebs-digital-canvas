import { Linkedin, Github } from "lucide-react";
import { useState, useEffect } from "react";

const PROFILE_IMAGE = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";

// Change from default export to named export
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
          @import url('https://fonts.googleapis.com/css2?family=Cambria:wght@400;500;600;700&display=swap');

          * {
            font-family: 'Cambria', serif;
          }

          .font-cambria {
            font-family: 'Cambria', serif;
          }

          .text-subtle-glow {
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .bg-hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: relative;
            overflow: hidden;
          }

          .bg-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
            opacity: 0.6;
          }

          .btn-professional {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-weight: 600;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .btn-professional:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          }

          .btn-professional::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: all 0.5s;
          }

          .btn-professional:hover::before {
            left: 100%;
          }

          .btn-secondary {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
            font-weight: 600;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
          }

          .btn-secondary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          }

          .btn-secondary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: all 0.5s;
          }

          .btn-secondary:hover::before {
            left: 100%;
          }

          .professional-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 3rem;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;
            position: relative;
            overflow: hidden;
          }

          .professional-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          }

          .professional-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2, #4facfe);
            border-radius: 20px 20px 0 0;
          }

          .floating-element {
            position: absolute;
            opacity: 0.1;
            animation: float 6s infinite ease-in-out;
          }

          .geometric-shape {
            position: absolute;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 50%;
            opacity: 0.05;
            animation: rotate 20s infinite linear;
          }

          .profile-professional {
            position: relative;
            transition: all 0.5s ease;
          }

          .profile-professional:hover {
            transform: scale(1.05);
          }

          .profile-professional::before {
            content: '';
            position: absolute;
            top: -8px;
            left: -8px;
            right: -8px;
            bottom: -8px;
            background: linear-gradient(45deg, #667eea, #764ba2, #4facfe);
            border-radius: 50%;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
          }

          .profile-professional:hover::before {
            opacity: 1;
          }

          .subtle-cursor {
            position: absolute;
            width: 12px;
            height: 12px;
            background: radial-gradient(circle, rgba(102, 126, 234, 0.4), transparent);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.4;
            transition: all 0.1s ease;
          }

          .interaction-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-weight: 600;
            border: none;
            padding: 12px 24px;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
          }

          .interaction-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          }

          .interaction-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: all 0.5s;
          }

          .interaction-btn:hover::before {
            left: 100%;
          }

          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
            100% { transform: translateY(0px) rotate(360deg); }
          }

          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in-up {
            animation: fadeInUp 0.8s ease-out;
          }

          .fade-in-up-delay {
            animation: fadeInUp 0.8s ease-out 0.2s both;
          }

          .fade-in-up-delay-2 {
            animation: fadeInUp 0.8s ease-out 0.4s both;
          }

          .fade-in-up-delay-3 {
            animation: fadeInUp 0.8s ease-out 0.6s both;
          }

          .typewriter {
            overflow: hidden;
            border-right: 0.15em solid #333;
            white-space: nowrap;
            animation: typewriter 2s steps(40, end), blink-caret 0.75s step-end infinite;
            display: inline-block;
          }

          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }

          @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: #333; }
          }

          .professional-pulse {
            animation: professionalPulse 2s ease-out;
          }

          @keyframes professionalPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }

          .status-indicator {
            display: inline-block;
            width: 8px;
            height: 8px;
            background: #4ade80;
            border-radius: 50%;
            margin-right: 8px;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>

      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen py-20 bg-hero text-gray-800"
      >
        {/* Subtle cursor follower */}
        <div 
          className="subtle-cursor"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
        />

        {/* Floating geometric shapes */}
        <div className="geometric-shape w-32 h-32 top-20 left-20" />
        <div className="geometric-shape w-24 h-24 top-40 right-32" />
        <div className="geometric-shape w-16 h-16 bottom-32 left-40" />

        {/* Floating elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`element-${i}`}
            className="floating-element w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}

        <div className={`professional-card z-10 text-center max-w-2xl mx-4 ${isSpellCasting ? 'professional-pulse' : ''}`}>
          <div className="flex justify-center mb-8 fade-in-up">
            <div className="profile-professional">
              <img
                src={PROFILE_IMAGE}
                alt="Shoyeb Rampure"
                className="rounded-full w-32 h-32 object-cover cursor-pointer shadow-lg"
                draggable={false}
                onClick={castSpell}
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-cambria font-bold text-gray-800 mb-4 fade-in-up-delay">
            <span className="typewriter">Shoyeb Rampure</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-2 fade-in-up-delay-2">
            Engineering Wizard | AI/ML Alchemist | Hackathon Enthusiast
          </p>
          
          <p className="text-base md:text-lg text-gray-500 mb-8 font-cambria fade-in-up-delay-2">
            shoyebrampure@gmail.com
          </p>

          {/* Professional interaction button */}
          <div className="mb-8 fade-in-up-delay-3">
            <button
              onClick={castSpell}
              className="interaction-btn font-cambria text-base"
            >
              View Portfolio
            </button>
          </div>

          <div className="flex items-center gap-6 justify-center fade-in-up-delay-3">
            <a
              href="https://www.linkedin.com/in/shoyeb-rampure-584958250/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-professional px-6 py-3 rounded-full inline-flex items-center gap-3 font-cambria text-base transition group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ShoyebRampure"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-6 py-3 rounded-full inline-flex items-center gap-3 font-cambria text-base transition group"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </div>

          {/* Professional status indicator */}
          <div className="mt-8 text-gray-500 text-sm flex items-center justify-center fade-in-up-delay-3">
            <span className="status-indicator"></span>
            {isSpellCasting ? "Processing..." : "Available for opportunities"}
          </div>
        </div>
      </section>
    </>
  );
}