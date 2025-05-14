
export function ResumeDownload() {
  return (
    <div className="mt-10 flex justify-center animate-fade-in">
      <a
        href="/resume.pdf"
        target="_blank"
        download
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-glass hover:scale-105 transition-transform"
      >
        Download Resume
      </a>
    </div>
  );
}
