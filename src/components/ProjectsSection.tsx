interface Project {
  title: string;
  tech: string;
  desc: string;
}

const projects: Project[] = [
  {
    title: "Thera Bot",
    tech: "Python, Computer Vision, NLP, Arduino, Machine Learning",
    desc: "A mini bot robot which detects emotions and is helpful for  children, adults, and old",
  },
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
          @import url('https://fonts.googleapis.com/css2?family=Cambria:wght@400;700&display=swap');

          * {
            font-family: 'Cambria', serif;
          }

          .projects-container {
            background: #fafafa;
            min-height: 100vh;
            padding: 4rem 0;
          }

          .section-header {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1a1a1a;
            text-align: center;
            margin-bottom: 3rem;
            letter-spacing: -0.025em;
            position: relative;
          }

          .section-header::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 2px;
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .project-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid #e5e7eb;
            position: relative;
            overflow: hidden;
          }

          .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            transform: scaleX(0);
            transition: transform 0.3s ease;
          }

          .project-card:hover::before {
            transform: scaleX(1);
          }

          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
            border-color: #d1d5db;
          }

          .project-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 1rem;
            line-height: 1.3;
          }

          .project-tech {
            font-size: 0.9rem;
            color: #6b7280;
            margin-bottom: 1rem;
            padding: 0.5rem 0;
            border-bottom: 1px solid #f3f4f6;
            font-weight: 500;
            letter-spacing: 0.025em;
          }

          .project-desc {
            color: #374151;
            font-size: 1rem;
            line-height: 1.6;
            font-weight: 400;
          }

          .tech-highlight {
            background: linear-gradient(90deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          @media (max-width: 768px) {
            .projects-grid {
              grid-template-columns: 1fr;
              padding: 0 1rem;
            }
            
            .project-card {
              padding: 1.5rem;
            }
            
            .section-header {
              font-size: 2rem;
              margin-bottom: 2rem;
            }
            
            .projects-container {
              padding: 2rem 0;
            }
          }

          @media (max-width: 480px) {
            .projects-grid {
              gap: 1.5rem;
            }
            
            .project-title {
              font-size: 1.25rem;
            }
            
            .section-header {
              font-size: 1.75rem;
            }
          }
        `}
      </style>

      <section className="projects-container">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="section-header">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((proj, index) => (
              <div key={proj.title} className="project-card">
                <div className="project-title">{proj.title}</div>
                <div className="project-tech tech-highlight">{proj.tech}</div>
                <div className="project-desc">{proj.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}