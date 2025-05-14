

export function ResumeDownload() {
  return (
    <div className="mt-10 flex justify-center animate-fade-in">
      <a
        href="/resume.pdf"
        target="_blank"
        download
        className="px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-glass hover:scale-110 transition-transform text-lg"
      >
        Download Resume
      </a>
    </div>
  );
}
