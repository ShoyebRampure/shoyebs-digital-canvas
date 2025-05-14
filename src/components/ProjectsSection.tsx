

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
    <section
      id="projects"
      className="w-full max-w-5xl mx-auto mt-10 animate-fade-in"
    >
      <h2 className="text-2xl font-bold text-primary mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-card/90 p-6 rounded-xl shadow-glass hover:scale-105 transform transition-all duration-200 border border-border"
          >
            <div className="text-lg font-semibold text-accent mb-2">{proj.title}</div>
            <div className="text-sm font-medium mb-2 text-primary">{proj.tech}</div>
            <div className="text-base text-gray-200">{proj.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
