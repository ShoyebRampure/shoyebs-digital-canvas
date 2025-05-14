
export function InternshipSection() {
  return (
    <section
      id="internship"
      className="w-full max-w-3xl mx-auto mt-10 p-8 rounded-2xl bg-card shadow-glass animate-fade-in"
    >
      <h2 className="text-2xl font-bold text-primary mb-5">Internship</h2>
      <div className="mb-2 font-semibold text-accent">
        Cyber Security Intern at Theta Dynamics Pvt. Ltd <span className="text-muted font-normal">(Aug 2024 – Oct 2024)</span>
      </div>
      <div className="text-base text-gray-200">
        <ul className="list-disc ml-6">
          <li>Security threat classification</li>
          <li>Log analysis</li>
          <li>Vulnerability assessments</li>
          <li>Network monitoring</li>
        </ul>
      </div>
    </section>
  );
}
