
export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-3xl mx-auto rounded-2xl bg-card shadow-glass mt-10 p-8 animate-fade-in"
    >
      <h2 className="text-2xl font-bold text-primary mb-3">About Me</h2>
      <div className="space-y-3 text-lg">
        <div>
          <span className="font-semibold text-accent">Education: </span>
          <span>
            Bachelor of Engineering in Information Science & Engineering,<br />
            KLE Technological University (KLE Tech), Hubli<br />
            CGPA: 9.31 (till 6th Semester)
          </span>
        </div>
        <div>
          <span className="font-semibold text-accent">Career Goal: </span>
          <span>
            To pursue a dynamic career in technology, blending AI/ML expertise with innovative problem solving for meaningful impact.
          </span>
        </div>
        <div>
          <span className="font-semibold text-accent">Expertise: </span>
          <span>
            Experienced in the fields of Artificial Intelligence, Machine Learning, IoT, and RPA. Proficient in full-stack web development and data-driven solutions. Adept at conceptualizing, pitching, and building academic & practical projects.
          </span>
        </div>
      </div>
    </section>
  );
}
