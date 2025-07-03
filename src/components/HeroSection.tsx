import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, Download, Wand2, Star, Sparkles, MapPin } from "lucide-react";

const PROFILE_IMAGE = "profile.jpg";

export default function MagicalHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentSpell, setCurrentSpell] = useState(0);
  const [showWandTrail, setShowWandTrail] = useState(false);

  const spells = [
    "🧙‍♂️ Engineering Wizard",
    "⚡ AI/ML Alchemist", 
    "🔮 Spellcasting Hackathoner",
    "🐍 Python Charmer",
    "⚙️ Code Conjurer"
  ];

  const achievements = [
    { icon: "🏆", text: "Hackathon Champion" },
    { icon: "🎯", text: "AI Projects Master" },
    { icon: "💻", text: "Full Stack Sorcerer" },
    { icon: "🌟", text: "Innovation Wizard" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const spellInterval = setInterval(() => {
      setCurrentSpell((prev) => (prev + 1) % spells.length);
    }, 3000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(spellInterval);
    };
  }, []);

  const handleWandClick = () => {
    setShowWandTrail(true);
    setTimeout(() => setShowWandTrail(false), 1000);
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&family=Cinzel:wght@400;500;600;700&display=swap');

          @font-face {
            font-family: 'HarryP';
            src: url('https://cdn.jsdelivr.net/gh/Geeksltd/HP-Fonts/HarryPotter.ttf') format('truetype');
          }

          .font-harry {
            font-family: 'HarryP', 'Cinzel', serif;
          }

          .font-cinzel {
            font-family: 'Cinzel', serif;
          }

          .text-glow {
            text-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700;
          }

          .text-glow-subtle {
            text-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700;
          }

          .bg-magical {
            background: 
              radial-gradient(circle at 20% 80%, #1a1a2e 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #16213e 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, #0f3460 0%, transparent 50%),
              linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #0c0c0c 100%);
            position: relative;
            overflow: hidden;
          }

          .magical-orb {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, #FFD700 0%, transparent 70%);
            animation: float-orb 8s infinite ease-in-out;
            opacity: 0.3;
          }

          @keyframes float-orb {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
          }

          .hero-card {
            background: rgba(26, 26, 46, 0.85);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(255, 215, 0, 0.3);
            border-radius: 20px;
            box-shadow: 
              0 0 30px rgba(255, 215, 0, 0.15),
              inset 0 0 30px rgba(255, 215, 0, 0.05);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .hero-card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 
              0 20px 40px rgba(255, 215, 0, 0.25),
              inset 0 0 40px rgba(255, 215, 0, 0.1);
            border-color: rgba(255, 215, 0, 0.5);
          }

          .hero-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(from 0deg, transparent, #FFD700, transparent);
            animation: rotate-border 6s linear infinite;
            opacity: 0.1;
          }

          @keyframes rotate-border {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .profile-glow {
            position: relative;
            border: 3px solid #FFD700;
            border-radius: 50%;
            box-shadow: 
              0 0 30px rgba(255, 215, 0, 0.6),
              inset 0 0 20px rgba(255, 215, 0, 0.1);
            transition: all 0.3s ease;
          }

          .profile-glow:hover {
            transform: scale(1.05);
            box-shadow: 
              0 0 40px rgba(255, 215, 0, 0.8),
              inset 0 0 30px rgba(255, 215, 0, 0.2);
          }

          .btn-magical {
            background: linear-gradient(45deg, #6a3805, #FFD700, #6a3805);
            background-size: 200% 200%;
            color: #1a1a1a;
            font-weight: 600;
            border: 2px solid #FFD700;
            border-radius: 25px;
            padding: 12px 24px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .btn-magical:hover {
            background-position: right center;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 215, 0, 0.4);
          }

          .btn-magical::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.5s;
          }

          .btn-magical:hover::before {
            left: 100%;
          }

          .btn-dark {
            background: linear-gradient(45deg, #0b3d2e, #0ec979);
            color: white;
            font-weight: 600;
            border: 2px solid #0ec979;
            border-radius: 25px;
            padding: 12px 24px;
            transition: all 0.3s ease;
          }

          .btn-dark:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(14, 201, 121, 0.4);
            background: linear-gradient(45deg, #0ec979, #0b3d2e);
          }

          .magic-sparkle {
            position: absolute;
            width: 8px;
            height: 8px;
            background: #FFD700;
            border-radius: 50%;
            animation: sparkle 4s infinite ease-in-out;
            opacity: 0.8;
          }

          @keyframes sparkle {
            0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
            50% { transform: scale(1) rotate(180deg); opacity: 1; }
          }

          .wand-trail {
            position: fixed;
            width: 4px;
            height: 4px;
            background: #FFD700;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: trail 1s ease-out forwards;
          }

          @keyframes trail {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
          }

          .spell-text {
            animation: spell-fade 3s ease-in-out infinite;
          }

          @keyframes spell-fade {
            0%, 100% { opacity: 0.8; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(-5px); }
          }

          .achievement-badge {
            background: rgba(255, 215, 0, 0.1);
            border: 1px solid rgba(255, 215, 0, 0.3);
            border-radius: 50px;
            padding: 8px 16px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .achievement-badge:hover {
            background: rgba(255, 215, 0, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
          }

          .magic-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #FFD700 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            transition: all 0.1s ease;
          }

          .typing-indicator {
            display: inline-block;
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>

      <section className="relative min-h-screen bg-magical text-white overflow-hidden">
        {/* Magical Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="magical-orb"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Floating Sparkles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="magic-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Magic Cursor */}
        <div 
          className="magic-cursor"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            transform: isHovered ? 'scale(2)' : 'scale(1)',
          }}
        />

        {/* Wand Trail Effect */}
        {showWandTrail && (
          <div 
            className="wand-trail"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          />
        )}

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
          <div className="hero-card max-w-4xl w-full p-8 md:p-12 text-center">
            <div className="relative z-10">
              {/* Profile Section */}
              <div className="mb-8">
                <div className="relative inline-block mb-6">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Shoyeb Rampure"
                    className="profile-glow w-40 h-40 md:w-48 md:h-48 object-cover"
                    draggable={false}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  />
                  <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                    <Wand2 size={20} className="text-gray-900" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-harry text-glow mb-4">
                  Shoyeb Rampure
                </h1>
                
                <div className="text-xl md:text-2xl lg:text-3xl text-yellow-400 font-cinzel mb-2 min-h-[2.5rem]">
                  <span className="spell-text">
                    {spells[currentSpell]}
                  </span>
                  <span className="typing-indicator">|</span>
                </div>
                
                <p className="text-lg md:text-xl text-yellow-200 mb-2 font-cinzel flex items-center justify-center gap-2">
                  <Mail size={20} />
                  shoyebrampure@gmail.com
                </p>
                
                <p className="text-base md:text-lg text-yellow-300 mb-6 font-cinzel flex items-center justify-center gap-2">
                  <MapPin size={18} />
                  Casting spells from the digital realm
                </p>
              </div>

              {/* Achievement Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-badge text-center">
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-sm font-cinzel text-yellow-200">
                      {achievement.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 justify-center mb-8">
                <a
                  href="https://www.linkedin.com/in/shoyeb-rampure-584958250/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magical inline-flex items-center gap-2 font-cinzel"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
                
                <a
                  href="https://github.com/ShoyebRampure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark inline-flex items-center gap-2 font-cinzel"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Github size={20} />
                  Explore Spellbook
                </a>
                
                <button
                  onClick={handleWandClick}
                  className="btn-magical inline-flex items-center gap-2 font-cinzel"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Download size={20} />
                  Download Scroll
                </button>
              </div>

              {/* Magic Quote */}
              <div className="text-center">
                <p className="text-lg md:text-xl text-yellow-300 font-cinzel italic">
                  "Code is like magic - it transforms ideas into reality" ✨
                </p>
                <div className="flex justify-center items-center gap-2 mt-4">
                  <Sparkles size={16} className="text-yellow-400" />
                  <span className="text-sm text-yellow-500 font-cinzel">
                    Ready to cast some digital spells?
                  </span>
                  <Sparkles size={16} className="text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}