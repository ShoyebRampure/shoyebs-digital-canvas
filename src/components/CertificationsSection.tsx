
export function CertificationsSection() {
  const certs = [
    "AWS Cloud Practitioner",
    "AI/ML Specialization",
    "UiPath RPA Developer",
    "Python for Data Science",
    "MongoDB Basics",
  ];
  return (
    <section
      id="certifications"
      className="w-full max-w-3xl mx-auto mt-10 p-8 rounded-2xl bg-card shadow-glass animate-fade-in"
    >
      <h2 className="text-2xl font-bold text-primary mb-5">Certifications</h2>
      <div className="flex flex-wrap gap-4">
        {certs.map((cert) => (
          <span
            key={cert}
            className="px-4 py-2 bg-accent rounded-full text-white font-medium shadow hover:scale-105 transition transform"
          >
            {cert}
          </span>
        ))}
      </div>
    </section>
  );
}
