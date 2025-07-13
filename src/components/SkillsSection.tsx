export function SkillsSection() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cambria:wght@400;600;700&display=swap');

          * {
            font-family: 'Cambria', serif;
          }

          .skills-container {
            background: #fafafa;
            padding: 4rem 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
          }

          .skills-content {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem;
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
            border: 1px solid #e5e7eb;
          }

          .section-header {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1a1a1a;
            text-align: center;
            margin-bottom: 3rem;
            letter-spacing: -0.025em;
            position: relative;
          }

          .section-header::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 2px;
          }

          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2.5rem;
            margin-top: 2rem;
          }

          .skill-category-container {
            background: #f8fafc;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .skill-category-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            transform: scaleX(0);
            transition: transform 0.3s ease;
          }

          .skill-category-container:hover::before {
            transform: scaleX(1);
          }

          .skill-category-container:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-color: #cbd5e1;
          }

          .skill-category {
            color: #1f2937;
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            background: linear-gradient(90deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -0.025em;
          }

          .skills-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .skill-item {
            color: #4b5563;
            padding: 0.75rem 0;
            position: relative;
            font-weight: 500;
            font-size: 1rem;
            transition: all 0.3s ease;
            border-bottom: 1px solid #f1f5f9;
          }

          .skill-item:last-child {
            border-bottom: none;
          }

          .skill-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .skill-item:hover::before {
            transform: translateY(-50%) scale(1.3);
            box-shadow: 0 0 8px rgba(102, 126, 234, 0.4);
          }

          .skill-item:hover {
            color: #1f2937;
            padding-left: 1.5rem;
          }

          .skill-item-text {
            margin-left: 1.5rem;
          }

          @media (max-width: 768px) {
            .skills-content {
              padding: 2rem;
              margin: 0 1rem;
            }
            
            .skills-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            
            .section-header {
              font-size: 2rem;
              margin-bottom: 2rem;
            }
            
            .skills-container {
              padding: 2rem 0;
            }
            
            .skill-category-container {
              padding: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .skills-content {
              padding: 1.5rem;
            }
            
            .section-header {
              font-size: 1.75rem;
            }
            
            .skill-category {
              font-size: 1.1rem;
            }
          }
        `}
      </style>

      <section className="skills-container">
        <div className="skills-content">
          <h2 className="section-header">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category-container">
              <div className="skill-category">Languages</div>
              <ul className="skills-list">
                <li className="skill-item">
                  <span className="skill-item-text">Java</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">C</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">Python</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">HTML</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">CSS</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">JavaScript</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">SQL</span>
                </li>
              </ul>
            </div>
            <div className="skill-category-container">
              <div className="skill-category">Technical Areas</div>
              <ul className="skills-list">
                <li className="skill-item">
                  <span className="skill-item-text">AI</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">ML</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">RPA</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">Web Dev</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">IoT</span>
                </li>
              </ul>
            </div>
            <div className="skill-category-container">
              <div className="skill-category">Core Courses</div>
              <ul className="skills-list">
                <li className="skill-item">
                  <span className="skill-item-text">DSA</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">DBMS</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">OOPS</span>
                </li>
                <li className="skill-item">
                  <span className="skill-item-text">OS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}