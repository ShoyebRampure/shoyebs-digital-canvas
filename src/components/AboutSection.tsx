

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-3xl mx-auto mt-10 p-8 rounded-2xl bg-card shadow-glass animate-fade-in"
    >
      <h2 className="text-2xl font-bold text-primary mb-3">About Me</h2>
      <div className="space-y-3 text-lg">
        <div>
          <span className="font-semibold text-accent">B.E. in Information Science and Engineering</span>
        </div>
        <div>
          <span className="font-medium">B.N.M Institute of Technology, CGPA: 8.07 (2022–2026)</span>
        </div>
        <div>
          <span>
            Motivated student skilled in AI/ML, IoT, and RPA with real-world experience via internships and hackathons.
          </span>
        </div>
      </div>
    </section>
  );
}
