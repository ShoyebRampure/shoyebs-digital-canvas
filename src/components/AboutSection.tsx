import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cambria:wght@400;700&display=swap');

          .bg-professional {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            backdrop-filter: blur(10px);
          }

          .shadow-professional {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
          }

          .text-primary {
            color: #1e293b;
          }

          .text-secondary {
            color: #475569;
          }

          .text-accent {
            color: #3b82f6;
          }

          .border-professional {
            border: 1px solid #e2e8f0;
          }

          .font-primary {
            font-family: 'Cambria', Georgia, serif;
          }

          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .hover-lift:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);
          }

          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(30px);
          }

          .fade-in-up.delay-1 {
            animation-delay: 0.2s;
          }

          .fade-in-up.delay-2 {
            animation-delay: 0.4s;
          }

          .fade-in-up.delay-3 {
            animation-delay: 0.6s;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .skill-badge {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.75rem;
            font-size: 0.875rem;
            font-weight: 500;
            display: inline-block;
            margin: 0.25rem;
            transition: all 0.3s ease;
          }

          .skill-badge:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          }

          .info-card {
            background: white;
            border-radius: 1rem;
            padding: 1.5rem;
            border: 1px solid #f1f5f9;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .info-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          }

          .info-card:hover {
            border-color: #e2e8f0;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }

          .icon-wrapper {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 0.75rem;
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 2rem;
            position: relative;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            width: 3rem;
            height: 3px;
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
            border-radius: 1.5px;
          }

          @media (max-width: 768px) {
            .section-title {
              font-size: 2rem;
            }
            
            .info-card {
              padding: 1.25rem;
            }
            
            .skill-badge {
              font-size: 0.8rem;
              padding: 0.4rem 0.8rem;
              margin: 0.2rem;
            }
            
            .icon-wrapper {
              width: 2rem;
              height: 2rem;
              font-size: 1rem;
            }
          }

          @media (max-width: 480px) {
            .section-title {
              font-size: 1.75rem;
            }
            
            .info-card {
              padding: 1rem;
            }
            
            .skill-badge {
              font-size: 0.75rem;
              padding: 0.35rem 0.7rem;
            }
          }
        `}
      </style>

      <section
        id="about"
        className="w-full max-w-4xl mx-auto mt-10 p-8 rounded-2xl bg-professional shadow-professional border-professional font-primary hover-lift fade-in-up"
      >
        <h2 className="section-title text-primary fade-in-up delay-1">
          About Me
        </h2>
        
        <div className="grid gap-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="info-card fade-in-up delay-2">
              <div className="icon-wrapper">
                🎓
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Education
              </h3>
              <p className="text-secondary font-medium">
                B.E. in Information Science and Engineering
              </p>
              <p className="text-secondary text-sm mt-1">
                B.N.M Institute of Technology | CGPA: 9.06 (2022–2026)
              </p>
            </div>

            <div className="info-card fade-in-up delay-3">
              <div className="icon-wrapper">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Expertise
              </h3>
              <p className="text-secondary leading-relaxed">
                Focused on real-world problem solving, I leverage AI/ML and IoT to design and deliver impactful solutions, with experience from professional internships and hackathons.
              </p>
            </div>
          </div>
        </div>

        <div className="info-card fade-in-up delay-3">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Core Skills
          </h3>
          <div className="flex flex-wrap">
            <span className="skill-badge">AI/ML</span>
            <span className="skill-badge">IoT Systems</span>
            <span className="skill-badge">RPA</span>
            <span className="skill-badge">Software Engineering</span>
            <span className="skill-badge">Problem Solving</span>
            <span className="skill-badge">Innovation</span>
          </div>
        </div>
      </section>
    </>
  );
};