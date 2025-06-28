import React from 'react';

export const AchievementsSection: React.FC = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap');

          @font-face {
            font-family: 'HarryP';
            src: url('https://cdn.jsdelivr.net/gh/Geeksltd/HP-Fonts/HarryPotter.ttf') format('truetype');
          }

          .bg-hogwarts {
            background: url('https://i.imgur.com/hwvsnvM.jpg') no-repeat center center/cover;
            background-blend-mode: overlay;
            background-color: #1a1a1aee;
          }

          .scroll parchment {
            border-radius: 1.5rem;
            background: linear-gradient(145deg, #fdf6e3, #f0e6c8);
            padding: 2rem;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.25);
          }

          .shadow-magical {
            box-shadow: 0 0 25px 8px rgba(255, 215, 0, 0.3);
          }

          .text-gold {
            color: #FFD700;
          }

          .border-gold {
            border: 2px solid #FFD700;
          }

          .text-parchment {
            color: #3c2f1c;
          }

          .font-harry {
            font-family: 'HarryP', 'IM Fell English SC', serif;
          }

          .text-hufflepuff {
            color: #ecb939;
          }

          .glow-on-hover:hover {
            color: #FFD700;
            text-shadow: 0 0 5px #fff199, 0 0 15px #FFD700;
            transition: all 0.3s ease-in-out;
          }

          .wand-icon {
            margin-right: 0.5rem;
            animation: sparkle 2s infinite ease-in-out;
          }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out both;
          }

          @keyframes sparkle {
            0%, 100% { transform: rotate(0deg) scale(1); opacity: 1; }
            50% { transform: rotate(10deg) scale(1.05); opacity: 0.8; }
          }
        `}
      </style>

      <section
        id="achievements"
        className="w-full max-w-4xl mx-auto mt-12 px-6 py-10 rounded-3xl bg-hogwarts shadow-magical border-gold animate-fade-in"
      >
        <h2 className="text-4xl font-harry text-gold mb-8 text-center">🏆 Magical Achievements 🏆</h2>
        <div className="scroll parchment space-y-6 text-lg font-serif text-parchment leading-relaxed">
          <div className="glow-on-hover">
            <span className="wand-icon">🪄</span>
            <strong>Gold Medalist</strong> | INEX – International Invention & Innovation Expo, Goa<br />
            Represented India and clinched the gold medal in the AI and Technology domain for the <em>DOT-AI Powered Braille Project</em>, competing against 20 countries in 15 domains.
          </div>
          <div className="glow-on-hover">
            <span className="wand-icon">✨</span>
            <strong>First Prize</strong> | Ideathon at Jyothy Institute of Technology, Bangalore<br />
            Awarded first place out of 80 teams from across Karnataka for innovative solutions.
          </div>
          <div className="glow-on-hover">
            <span className="wand-icon">⚡</span>
            <strong>First Prize</strong> | Sparkathon at RajaRajeswari College of Engineering, Bangalore<br />
            Secured top position among 80 teams across Karnataka with unique project ideas.
          </div>
          <div className="glow-on-hover">
            <span className="wand-icon">🌟</span>
            <strong>2nd Runner-up</strong> | PEC Hacks 2.0, Panimalar Engineering College, Chennai<br />
            Bagged 2nd runner-up position in a 36-hour intense hackathon.
          </div>
          <div className="glow-on-hover">
            <span className="wand-icon">🔮</span>
            <strong>Project Presenter</strong> | NASSCOM Technology Confluence, Bangalore<br />
            Presented the <em>DOT</em> project at Radisson Blu before top industry leaders and tech wizards.
          </div>
        </div>
      </section>
    </>
  );
};
