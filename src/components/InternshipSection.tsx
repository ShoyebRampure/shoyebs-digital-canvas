export default function InternshipSection() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cambria:wght@400;500;600;700&display=swap');

          .font-cambria {
            font-family: 'Cambria', serif;
          }

          .professional-section {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border: 1px solid rgba(148, 163, 184, 0.2);
            backdrop-filter: blur(10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
          }

          .professional-section:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
          }

          .section-title {
            color: #1e293b;
            font-weight: 700;
            position: relative;
            display: inline-block;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 2px;
          }

          .internship-card {
            background: rgba(255, 255, 255, 0.7);
            border: 1px solid rgba(148, 163, 184, 0.2);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .internship-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 0 2px 2px 0;
          }

          .internship-card:hover {
            transform: translateX(5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            background: rgba(255, 255, 255, 0.9);
          }

          .internship-title {
            color: #1e293b;
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .internship-company {
            color: #667eea;
            font-weight: 500;
          }

          .internship-duration {
            color: #64748b;
            font-size: 0.9rem;
            font-weight: 500;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .internship-duration::before {
            content: '📅';
            font-size: 0.8rem;
          }

          .internship-list {
            list-style: none;
            padding-left: 0;
            margin: 0;
          }

          .internship-list li {
            color: #475569;
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
            line-height: 1.6;
          }

          .internship-list li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: #667eea;
            font-weight: bold;
          }

          .internship-list li:hover {
            color: #1e293b;
            transform: translateX(3px);
            transition: all 0.2s ease;
          }

          .fade-in-up {
            animation: fadeInUp 0.6s ease-out;
          }

          .fade-in-up-delay {
            animation: fadeInUp 0.6s ease-out 0.2s both;
          }

          .fade-in-up-delay-3 {
            animation: fadeInUp 0.6s ease-out 0.6s both;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .icon-badge {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 0.3rem 0.6rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            display: inline-block;
            margin-bottom: 0.5rem;
          }
        `}
      </style>

      <section
        id="internship"
        className="w-full max-w-4xl mx-auto mt-12 p-8 rounded-2xl professional-section font-cambria"
      >
        <h2 className="text-3xl section-title mb-8 text-center fade-in-up">
          Professional Experience
        </h2>

        

        <div className="internship-card fade-in-up-delay-2">
          <div className="icon-badge">Navigation Systems</div>
          <h3 className="internship-title">
            Project Intern <span className="internship-company">ISRO</span>
          </h3>
          <div className="internship-duration">June 2025 – Present</div>
          <ul className="internship-list">
            <li>Navigation and tracking systems development</li>
            <li>Implement Apache Kafka architecture for real-time data streaming</li>
            <li>Work on satellite communication protocols</li>
            <li>Collaborate with aerospace engineering teams</li>
          </ul>
        </div>

            <div className="internship-card fade-in-up-delay">
          <div className="icon-badge">Cybersecurity</div>
          <h3 className="internship-title">
            Cyber Security Intern at <span className="internship-company">Theta Dynamics Pvt. Ltd</span>
          </h3>
          <div className="internship-duration">August 2024 – October 2024</div>
          <ul className="internship-list">
            <li>Security threat classification</li>
            <li>Log analysis</li>
            <li>Vulnerability assessments</li>
            <li>Network monitoring</li>
          </ul>
        </div>

        <div className="internship-card fade-in-up-delay-2">
          <div className="icon-badge">Web Development</div>
          <h3 className="internship-title">
            Web Development Intern at <span className="internship-company">B.N.M Institute of Technology</span>
          </h3>
          <div className="internship-duration">June 2024 – July 2024</div>
          <ul className="internship-list">
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