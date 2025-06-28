import React from 'react';

export const AboutSection: React.FC = () => {
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
            background: linear-gradient(135deg, #1a1a1a, #2c2c2c);
          }

          .shadow-magical {
            box-shadow: 0 0 20px 6px rgba(255, 215, 0, 0.3);
          }

          .text-gold {
            color: #FFD700;
          }

          .border-gold {
            border: 2px solid #FFD700;
          }

          .text-parchment {
            color: #f5f0dc;
          }

          .font-harry {
            font-family: 'HarryP', 'IM Fell English SC', serif;
          }

          .text-hufflepuff {
            color: #ecb939;
          }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out both;
          }
        `}
      </style>

      <section
        id="about"
        className="w-full max-w-3xl mx-auto mt-10 p-8 rounded-2xl bg-hogwarts shadow-magical border-gold animate-fade-in"
      >
        <h2 className="text-3xl font-harry text-gold mb-4">⚡ About Me ⚡</h2>
        <div className="space-y-4 text-lg text-parchment font-serif tracking-wide">
          <div>
            <span className="font-semibold text-hufflepuff">
              🎓 B.E. in Information Science and Engineering
            </span>
          </div>
          <div>
            <span className="font-medium">
              🏰 B.N.M Institute of Technology | CGPA: 8.41 (2022–2026)
            </span>
          </div>
          <div>
            <span>
              ✨ A motivated wizard-in-training skilled in the mystical arts of AI/ML, enchanted IoT systems,
              and spellbinding RPA, with battle experience from magical internships and hackathons.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
