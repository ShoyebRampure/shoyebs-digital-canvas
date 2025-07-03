export function InternshipSection() {
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

          .bg-parchment {
            background: linear-gradient(135deg, #1a1a1a, #2c2c2c);
          }

          .shadow-hogwarts {
            box-shadow: 0 0 25px 6px rgba(255, 215, 0, 0.2);
          }

          .internship-item {
            border-left: 3px solid #FFD700;
            padding-left: 1rem;
            margin-bottom: 1.5rem;
          }

          .internship-item h3 {
            color: #FFD700;
            font-size: 1.125rem;
            font-weight: bold;
          }

          .internship-item span {
            color: #c5b992;
            font-weight: normal;
            font-size: 0.95rem;
          }

          .internship-item ul {
            margin-top: 0.5rem;
            padding-left: 1.5rem;
            list-style-type: disc;
            color: #e6e6e6;
          }
        `}
      </style>

      <section
        id="internship"
        className="w-full max-w-3xl mx-auto mt-10 p-8 rounded-2xl bg-parchment shadow-hogwarts animate-fade-in"
      >
        <h2 className="text-3xl font-harry text-gold mb-6 text-center">✨ Internships</h2>

        <div className="internship-item">
          <h3>🛡️ Cyber Security Intern at Theta Dynamics Pvt. Ltd</h3>
          <span>(Aug 2024 – Oct 2024)</span>
          <ul>
            <li>Security threat classification</li>
            <li>Log analysis</li>
            <li>Vulnerability assessments</li>
            <li>Network monitoring</li>
          </ul>
        </div>

        <div className="internship-item">
          <h3>🧩 Web Development Intern at B.N.M Institute of Technology</h3>
          <span>(June 2024 – July 2024)</span>
          <ul>
            <li>Developed internal web tools and dashboards</li>
            <li>Improved UI/UX using modern design libraries</li>
            <li>Worked on dynamic content rendering with React</li>
            <li>Collaborated on deployment using Git and Netlify</li>
          </ul>
        </div>
      </section>
    </>
  );
}
