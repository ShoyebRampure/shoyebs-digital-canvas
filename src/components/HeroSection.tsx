import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowDown, Sparkles, Download } from 'lucide-react';

const PROFILE_IMAGE = 'profile.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

export function HeroSection() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
          .font-display { font-family: 'Poppins', sans-serif; }
          .font-body { font-family: 'Inter', sans-serif; }
        `}
      </style>

      <section
        id="home"
        className="font-body relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent px-4 py-20 sm:px-8"
      >
        {/* Resume button (top-right) */}
        <div className="absolute right-4 top-4 z-30 hidden sm:block">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            download="Shoyeb Rampure-Resume.pdf"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="flex h-10 items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-violet-700 shadow-sm backdrop-blur-sm hover:bg-white"
          >
            <Download className="h-4 w-4" strokeWidth={1.5} />
            Resume
          </motion.a>
        </div>
        {/* Soft ambient blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-violet-200/50 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl"
        />

        <div className="relative z-10 grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Photo */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative mx-auto flex justify-center"
          >
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-violet-400/40 to-fuchsia-400/20 blur-xl" />
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              src={PROFILE_IMAGE}
              alt="Shoyeb Rampure"
              draggable={false}
              className="relative h-64 w-64 rounded-full border-4 border-white object-cover shadow-xl sm:h-80 sm:w-80"
            />
          </motion.div>

          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Shoyeb Rampure
              </span>
            </motion.h1>

            <motion.p
              custom={0.18}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-3 text-xl font-medium text-slate-500"
            >
              Information Science Engineer
            </motion.p>

            <motion.div
              custom={0.26}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 inline-block rounded-2xl border border-violet-100 bg-violet-50/60 px-5 py-3 text-sm font-medium text-slate-600 sm:text-base"
            >
              AI/ML Enthusiast &middot; Hackathon Champion &middot; Web
              Developer
            </motion.div>

            <motion.a
              custom={0.32}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              href="mailto:shoyebrampure@gmail.com"
              className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400 transition-colors hover:text-violet-600 lg:justify-start"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              shoyebrampure@gmail.com
            </motion.a>

            {/* CTAs */}
            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <a
                href="#about"
                className="flex h-11 items-center rounded-full bg-violet-600 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="flex h-11 items-center rounded-full border border-violet-300 px-6 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-50"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social row — balanced, equal width */}
            <motion.div
              custom={0.46}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 flex justify-center gap-3 lg:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/shoyeb-rampure-584958250/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-36 items-center justify-center gap-2 rounded-full border border-violet-200 text-sm font-medium text-slate-600 transition-colors hover:border-violet-300 hover:text-violet-700"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                LinkedIn
              </a>
              <a
                href="https://github.com/ShoyebRampure"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-36 items-center justify-center gap-2 rounded-full border border-violet-200 text-sm font-medium text-slate-600 transition-colors hover:border-violet-300 hover:text-violet-700"
              >
                <Github className="h-4 w-4" strokeWidth={1.75} />
                GitHub
              </a>
            </motion.div>

            {/* Status */}
            <motion.div
              custom={0.52}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400 lg:justify-start"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </motion.div>
          </div>
        </div>

        {/* Scroll cue into the journey */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative z-10 mt-16 flex flex-col items-center gap-2 text-sm font-medium text-slate-400 hover:text-violet-600"
        >
          <span className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Begin the Journey
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </section>
    </>
  );
}