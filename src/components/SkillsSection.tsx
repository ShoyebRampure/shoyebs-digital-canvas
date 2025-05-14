
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full max-w-4xl mx-auto mt-10 p-8 rounded-2xl bg-card shadow-glass animate-fade-in"
    >
      <h2 className="text-2xl font-bold text-primary mb-5">Skills</h2>
      <div className="grid md:grid-cols-3 gap-5 text-base">
        <div>
          <div className="font-semibold text-accent mb-2">Programming Languages</div>
          <ul className="space-y-1">
            <li>Java</li>
            <li>C</li>
            <li>Python</li>
            <li>HTML, CSS, JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-accent mb-2">Domains</div>
          <ul className="space-y-1">
            <li>AI/ML</li>
            <li>RPA</li>
            <li>IoT</li>
            <li>Web Development</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-accent mb-2">Core Courses</div>
          <ul className="space-y-1">
            <li>Data Structures & Algorithms (DSA)</li>
            <li>Object Oriented Programming (OOPS)</li>
            <li>Operating Systems (OS)</li>
            <li>Database Management Systems (DBMS)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
