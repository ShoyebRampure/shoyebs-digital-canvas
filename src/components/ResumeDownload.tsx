export function ResumeDownload() {
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

          .btn-scroll {
            background: linear-gradient(to right, #6a3805, #FFD700);
            color: #000;
            border: 2px solid #FFD700aa;
            padding: 0.75rem 2rem;
            border-radius: 0.75rem;
            font-size: 1.25rem;
            font-weight: 600;
            text-shadow: 0 0 2px #fff;
            transition: all 0.3s ease;
            box-shadow: 0 0 12px #FFD70033;
          }

          .btn-scroll:hover {
            transform: scale(1.08);
            box-shadow: 0 0 18px #FFD700aa;
          }
        `}
      </style>

      <div className="mt-10 flex justify-center animate-fade-in">
        <a
          href="/resume.pdf"
          target="_blank"
          download
          className="btn-scroll font-harry"
        >
          🪄 Download Wizard's Scroll
        </a>
      </div>
    </>
  );
}
