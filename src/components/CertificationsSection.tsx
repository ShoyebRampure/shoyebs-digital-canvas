import React from 'react';

export const CertificationsSection: React.FC = () => {
  const certs = [
    "AWS Foundation",
    "AWS Cloud Practitioner",
    "Generative AI – IBM",
    "AI & ML Basics",
    "UiPath RPA (Multiple Modules)",
    "Python for Data Science",
    "MongoDB for Students",
  ];

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
            box-shadow: 0 0 25px 6px rgba(255, 215, 0, 0.25);
          }

          .text-gold {
            color: #FFD700;
          }

          .border-gold {
            border: 2px solid #FFD700;
          }

          .font-harry {
            font-family: 'HarryP', 'IM Fell English SC', serif;
          }

          .text-parchment {
            color: #f5f0dc;
          }

          .cert-tag {
            background: linear-gradient(145deg, #fdf6e3, #f0e6c8);
            color: #3b2c1a;
            border: 1px solid #d6ba7f;
            font-weight: 500;
            border-radius: 9999px;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            padding: 0.5rem 1rem;
            font-family: 'IM Fell English SC', serif;
          }

          .cert-tag:hover {
            transform: scale(1.08);
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
            color: #FFD700;
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
        id="certifications"
        className="w-full max-w-4xl mx-auto mt-12 p-8 rounded-3xl bg-hogwarts shadow-magical border-gold animate-fade-in"
      >
        <h2 className="text-3xl font-harry text-gold mb-6 text-center">📜  Certifications 📜</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {certs.map((cert) => (
            <span key={cert} className="cert-tag">{cert}</span>
          ))}
        </div>
      </section>
    </>
  );
};
