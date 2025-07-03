export function SkillsSection() {
  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'HarryP';
            src: url('https://cdn.jsdelivr.net/gh/Geeksltd/HP-Fonts/HarryPotter.ttf') format('truetype');
          }

          .font-harry {
            font-family: 'HarryP', serif;
          }

          .bg-parchment {
            background: linear-gradient(135deg, #1a1a1a, #2c2c2c);
          }

          .text-gold {
            color: #FFD700;
          }

          .skill-category {
            color: #FFD700;
            font-weight: bold;
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            text-shadow: 0 0 6px #FFD70066;
          }

          .skill-item {
            color: #e6e6e6;
            padding-left: 1rem;
            position: relative;
          }

          .skill-item::before {
            content: "🪄";
            position: absolute;
            left: 0;
          }

          .section-container {
            box-shadow: 0 0 20px #FFD70022;
            border: 1px solid #FFD70033;
            border-radius: 1.5rem;
          }
        `}
      </style>

      <section
        id="skills"
        className="w-full max-w-4xl mx-auto mt-10 p-8 bg-parchment section-container animate-fade-in"
      >
        <h2 className="text-3xl font-harry text-gold mb-6 text-center">📚 Spellbook of Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 text-base">
          <div>
            <div className="skill-category">Languages</div>
            <ul className="space-y-2">
              <li className="skill-item">Java</li>
              <li className="skill-item">C</li>
              <li className="skill-item">Python</li>
              <li className="skill-item">HTML</li>
              <li className="skill-item">CSS</li>
              <li className="skill-item">JavaScript</li>
              <li className="skill-item">SQL</li>
            </ul>
          </div>
          <div>
            <div className="skill-category">Technical Areas</div>
            <ul className="space-y-2">
              <li className="skill-item">AI</li>
              <li className="skill-item">ML</li>
              <li className="skill-item">RPA</li>
              <li className="skill-item">Web Dev</li>
              <li className="skill-item">IoT</li>
            </ul>
          </div>
          <div>
            <div className="skill-category">Core Courses</div>
            <ul className="space-y-2">
              <li className="skill-item">DSA</li>
              <li className="skill-item">DBMS</li>
              <li className="skill-item">OOPS</li>
              <li className="skill-item">OS</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
