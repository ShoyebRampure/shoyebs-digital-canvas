export function ResumeDownload() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cambria:wght@400;600;700&display=swap');

          * {
            font-family: 'Cambria', serif;
          }

          .resume-container {
            margin-top: 3rem;
            display: flex;
            justify-content: center;
            padding: 2rem 0;
          }

          .resume-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 1rem 2.5rem;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            font-family: 'Cambria', serif;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            letter-spacing: 0.025em;
            position: relative;
            overflow: hidden;
          }

          .resume-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.6s;
          }

          .resume-btn:hover::before {
            left: 100%;
          }

          .resume-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          }

          .resume-btn:active {
            transform: translateY(0);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          }

          .download-icon {
            font-size: 1.2rem;
            transition: transform 0.3s ease;
          }

          .resume-btn:hover .download-icon {
            transform: translateY(2px);
          }

          .btn-text {
            position: relative;
            z-index: 1;
          }

          @media (max-width: 640px) {
            .resume-btn {
              padding: 0.875rem 2rem;
              font-size: 1rem;
            }
            
            .resume-container {
              margin-top: 2rem;
              padding: 1rem 0;
            }
          }

          @media (max-width: 480px) {
            .resume-btn {
              padding: 0.75rem 1.5rem;
              font-size: 0.95rem;
            }
          }
        `}
      </style>

      <div className="resume-container">
        <a
          href="/resume.pdf"
          target="_blank"
          download
          className="resume-btn"
        >
          <span className="download-icon">📄</span>
          <span className="btn-text">Download Resume</span>
        </a>
      </div>
    </>
  );
}