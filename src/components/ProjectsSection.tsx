
export function ProjectsSection() {
  const projects = [
    {
      title: "DOT – AI-Powered Braille Learning Device",
      desc: "An innovative device leveraging AI to assist visually impaired individuals in learning Braille efficiently with real-time feedback.",
    },
    {
      title: "Smart Helmet",
      desc: "Designed a helmet with IoT sensors for accident detection and notifications, enhancing biker safety through smart technology.",
    },
    {
      title: "Healthcare Chatbot",
      desc: "Developed an intelligent chatbot using machine learning to provide medical information and answer healthcare queries to users 24/7.",
    },
    {
      title: "Smart Calorie Detection",
      desc: "Created a computer vision-based application for automatically detecting and evaluating calorie content from meal images.",
    },
    {
      title: "RPA Automation (Word to PDF Email System)",
      desc: "Built an automated RPA system that converts Word documents to PDFs and emails them efficiently, reducing manual workload.",
    },
  ];

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
            className="bg-card/80 p-6 rounded-xl shadow-glass hover:scale-105 transform transition-all duration-200 border border-border"
          >
            <div className="text-lg font-semibold text-accent mb-2">{proj.title}</div>
            <div className="text-base text-gray-200">{proj.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
