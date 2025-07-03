interface Project {
  title: string;
  tech: string;
  desc: string;
}

const projects: Project[] = [
  {
    title: "DOT – The AI Powered Braille",
    tech: "JavaScript, HTML, CSS, Lama AI, Arduino, MySQL",
    desc: "Web + hardware tool for real-time Braille learning",
  },
  {
    title: "Smart Helmet",
    tech: "GPS, Gyroscope, IoT, Bluetooth",
    desc: "Safety system with accident detection, GPS, audio comms",
  },
  {
    title: "Healthcare Chatbot",
    tech: "Python, ML, Flask, NLP",
    desc: "AI chatbot for disease prediction and suggestions",
  },
  {
    title: "Smart Calorie Detection System",
    tech: "IoT, Python, Load Sensor",
    desc: "Food weight-to-calorie calculation system",
  },
  {
    title: "RPA Automation System",
    tech: "Python, UiPath",
    desc: "Converts Word to PDF & emails automatically",
  },
];

export function ProjectsSection() {
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

          .text-gold {
            color: #FFD700;
          }

          .bg-scroll {
            background: linear-gradient(135deg, #1a1a1a, #2c2c2c);
          }

          .shadow-wizard {
            box-shadow: 0 0 20px 3px rgba(255, 215, 0, 0.2);
          }

          .project-card {
            background: rgba(38, 38, 38, 0.95);
            border: 1px solid #FFD70066;
            padding: 1.5rem;
            border-radius: 1rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .project-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 12px #FFD700aa;
          }

          .project-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #FFD700;
          }

          .project-tech {
            font-size: 0.9rem;
            color: #c5b992;
            font-weight: 500;
          }

          .project-desc {
            color: #e6e6e6;
            margin-top: 0.5rem;
            font-size: 1rem;
          }
        `}
      </style>

      <section
        id="projects"
        className="w-full max-w-5xl mx-auto mt-10 px-4 animate-fade-in"
      >
        <h2 className="text-3xl font-harry text-gold mb-8 text-center">🔮 Wizardry Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div key={proj.title} className="project-card shadow-wizard">
              <div className="project-title">{proj.title}</div>
              <div className="project-tech">{proj.tech}</div>
              <div className="project-desc">{proj.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
