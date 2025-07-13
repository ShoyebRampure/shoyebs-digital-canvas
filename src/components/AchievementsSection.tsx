import React from 'react';

export const AchievementsSection: React.FC = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cambria:wght@400;700&display=swap');

          .font-primary {
            font-family: 'Cambria', Georgia, serif;
          }

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

          .fade-in-up.delay-4 {
            animation-delay: 0.8s;
          }

          .fade-in-up.delay-5 {
            animation-delay: 1s;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
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
            text-align: center;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 4rem;
            height: 3px;
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
            border-radius: 1.5px;
          }

          .achievement-card {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            border: 1px solid #f1f5f9;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            margin-bottom: 1.5rem;
          }

          .achievement-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          }

          .achievement-card:hover {
            border-color: #e2e8f0;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
          }

          .achievement-icon {
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            transition: all 0.3s ease;
          }

          .achievement-card:hover .achievement-icon {
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          }

          .achievement-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 0.5rem;
          }

          .achievement-venue {
            color: #3b82f6;
            font-weight: 600;
            margin-bottom: 1rem;
            font-size: 0.95rem;
          }

          .achievement-description {
            color: #475569;
            line-height: 1.6;
            font-size: 0.95rem;
          }

          .achievement-highlight {
            color: #1e293b;
            font-weight: 600;
            font-style: italic;
          }

          .achievements-grid {
            display: grid;
            gap: 1.5rem;
          }

          @media (max-width: 768px) {
            .section-title {
              font-size: 2rem;
            }
            
            .achievement-card {
              padding: 1.5rem;
              margin-bottom: 1rem;
            }
            
            .achievement-icon {
              width: 2.5rem;
              height: 2.5rem;
              font-size: 1.25rem;
            }
            
            .achievement-title {
              font-size: 1.125rem;
            }
            
            .achievement-venue {
              font-size: 0.9rem;
            }
            
            .achievement-description {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            .section-title {
              font-size: 1.75rem;
            }
            
            .achievement-card {
              padding: 1.25rem;
            }
            
            .achievement-icon {
              width: 2rem;
              height: 2rem;
              font-size: 1rem;
            }
            
            .achievement-title {
              font-size: 1rem;
            }
            
            .achievement-venue {
              font-size: 0.85rem;
            }
            
            .achievement-description {
              font-size: 0.85rem;
            }
          }
        `}
      </style>

      <section
        id="achievements"
        className="w-full max-w-4xl mx-auto mt-12 px-6 py-10 rounded-3xl bg-professional shadow-professional border-professional font-primary hover-lift fade-in-up"
      >
        <h2 className="section-title fade-in-up delay-1">🏆 Achievements 🏆</h2>
        
        <div className="achievements-grid">
          <div className="achievement-card fade-in-up delay-1">
            <div className="achievement-icon">🏅</div>
            <h3 className="achievement-title">Gold Medalist</h3>
            <p className="achievement-venue">INEX – International Invention & Innovation Expo, Goa</p>
            <p className="achievement-description">
              Represented India and clinched the gold medal in the AI and Technology domain for the <span className="achievement-highlight">DOT-AI Powered Braille Project</span>, competing against 20 countries in 15 domains.
            </p>
          </div>

          <div className="achievement-card fade-in-up delay-2">
            <div className="achievement-icon">🥇</div>
            <h3 className="achievement-title">First Prize</h3>
            <p className="achievement-venue">Ideathon at Jyothy Institute of Technology, Bangalore</p>
            <p className="achievement-description">
              Awarded first place out of 80 teams from across Karnataka for innovative solutions.
            </p>
          </div>

          <div className="achievement-card fade-in-up delay-3">
            <div className="achievement-icon">🏆</div>
            <h3 className="achievement-title">First Prize</h3>
            <p className="achievement-venue">Sparkathon at RajaRajeswari College of Engineering, Bangalore</p>
            <p className="achievement-description">
              Secured top position among 80 teams across Karnataka with unique project ideas.
            </p>
          </div>

          <div className="achievement-card fade-in-up delay-4">
            <div className="achievement-icon">🥉</div>
            <h3 className="achievement-title">2nd Runner-up</h3>
            <p className="achievement-venue">PEC Hacks 2.0, Panimalar Engineering College, Chennai</p>
            <p className="achievement-description">
              Bagged 2nd runner-up position in a 36-hour intense hackathon.
            </p>
          </div>

          <div className="achievement-card fade-in-up delay-5">
            <div className="achievement-icon">📊</div>
            <h3 className="achievement-title">Project Presenter</h3>
            <p className="achievement-venue">NASSCOM Technology Confluence, Bangalore</p>
            <p className="achievement-description">
              Presented the <span className="achievement-highlight">DOT</span> project at Radisson Blu before top industry leaders and tech wizards.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};