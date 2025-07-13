import React from 'react';

export const CertificationsSection: React.FC = () => {
  const certs = [
    "AWS Foundation",
    "AWS Cloud Practitioner",
    "Generative AI – IBM",
    "AI & ML Basics",
    "UiPath RPA (Multiple Modules)",
    "Python for Data Science",
    "MongoDB for Students",
  ];

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

          .cert-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            max-width: 100%;
          }

          .cert-tag {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            color: #1e293b;
            border: 1px solid #e2e8f0;
            font-weight: 600;
            border-radius: 2rem;
            padding: 0.75rem 1.5rem;
            font-size: 0.95rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            position: relative;
            overflow: hidden;
            cursor: pointer;
          }

          .cert-tag::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
            transition: left 0.5s ease;
          }

          .cert-tag:hover::before {
            left: 100%;
          }

          .cert-tag:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
            border-color: #3b82f6;
            color: #3b82f6;
          }

          .cert-tag:nth-child(odd) {
            animation: slideInLeft 0.8s ease-out forwards;
            animation-delay: calc(var(--i) * 0.1s);
          }

          .cert-tag:nth-child(even) {
            animation: slideInRight 0.8s ease-out forwards;
            animation-delay: calc(var(--i) * 0.1s);
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .cert-icon {
            display: inline-block;
            margin-right: 0.5rem;
            font-size: 1.1rem;
          }

          @media (max-width: 768px) {
            .section-title {
              font-size: 2rem;
            }
            
            .cert-container {
              gap: 0.75rem;
            }
            
            .cert-tag {
              padding: 0.6rem 1.2rem;
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            .section-title {
              font-size: 1.75rem;
            }
            
            .cert-container {
              gap: 0.5rem;
            }
            
            .cert-tag {
              padding: 0.5rem 1rem;
              font-size: 0.85rem;
            }
            
            .cert-icon {
              font-size: 1rem;
            }
          }

          @media (max-width: 360px) {
            .cert-tag {
              padding: 0.4rem 0.8rem;
              font-size: 0.8rem;
            }
          }
        `}
      </style>

      <section
        id="certifications"
        className="w-full max-w-4xl mx-auto mt-12 p-8 rounded-3xl bg-professional shadow-professional border-professional font-primary hover-lift fade-in-up"
      >
        <h2 className="section-title fade-in-up delay-1">📜 Certifications 📜</h2>
        <div className="cert-container">
          {certs.map((cert, index) => (
            <span 
              key={cert} 
              className="cert-tag" 
              style={{ '--i': index + 1 } as React.CSSProperties}
            >
              <span className="cert-icon">🏅</span>
              {cert}
            </span>
          ))}
        </div>
      </section>
    </>
  );
};