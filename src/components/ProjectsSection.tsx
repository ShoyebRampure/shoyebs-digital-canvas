import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Code2, Cpu } from 'lucide-react';

interface Project {
  title: string;
  tech: string;
  desc: string;
  category: 'software' | 'hardware';
}

const projects: Project[] = [
  {
    title: 'Thera Bot',
    tech: 'Python, Computer Vision, NLP, Arduino, Machine Learning',
    desc: 'A mini bot that detects emotions and offers support for children, adults, and the elderly.',
    category: 'hardware',
  },
  {
    title: 'DOT – The AI Powered Braille',
    tech: 'JavaScript, HTML, CSS, Lama AI, Arduino, MySQL',
    desc: 'Web + hardware tool for real-time Braille learning.',
    category: 'hardware',
  },
  {
    title: 'Smart Helmet',
    tech: 'GPS, Gyroscope, IoT, Bluetooth',
    desc: 'Safety system with accident detection, GPS tracking, and audio communication.',
    category: 'hardware',
  },
  {
    title: 'Healthcare Chatbot',
    tech: 'Python, ML, Flask, NLP',
    desc: 'AI chatbot for disease prediction and treatment suggestions.',
    category: 'software',
  },
  {
    title: 'Smart Calorie Detection System',
    tech: 'IoT, Python, Load Sensor',
    desc: 'Converts measured food weight into calorie estimates in real time.',
    category: 'hardware',
  },
  {
    title: 'RPA Automation System',
    tech: 'Python, UiPath',
    desc: 'Converts Word documents to PDF and emails them automatically.',
    category: 'software',
  },
];

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'software', label: 'Software Projects' },
  { key: 'hardware', label: 'Hardware Projects' },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ProjectsSection() {
  const [active, setActive] = useState<(typeof filters)[number]['key']>('all');

  const visible = projects.filter((p) =>
    active === 'all' ? true : p.category === active
  );

  return (
    <section id="projects" className="font-body w-full bg-transparent">
      {/* Chapter banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500 py-16">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-4 text-center sm:flex-row sm:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              y: { duration: 4, repeat: Infinity },
              default: { duration: 0.6 },
            }}
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm"
          >
            <Rocket className="h-9 w-9 text-white" strokeWidth={1.5} />
          </motion.div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-violet-100">
              Chapter 2
            </span>
            <h2 className="font-display mt-1 text-4xl font-extrabold text-white sm:text-5xl">
              My Projects
            </h2>
            <p className="mt-1 text-violet-100">
              Innovative solutions using AI, ML, IoT &amp; embedded systems
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`h-10 rounded-full px-5 text-sm font-semibold transition-colors ${
                active === f.key
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'border border-violet-100 bg-white text-slate-600 hover:border-violet-300 hover:text-violet-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          key={active}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((proj) => (
              <motion.div
                key={proj.title}
                variants={item}
                layout
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-6 shadow-sm"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-300 group-hover:scale-x-100" />

                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                  {proj.category === 'software' ? (
                    <Code2 className="h-3.5 w-3.5" strokeWidth={1.75} />
                  ) : (
                    <Cpu className="h-3.5 w-3.5" strokeWidth={1.75} />
                  )}
                  {proj.category === 'software' ? 'Software' : 'Hardware'}
                </span>

                <h3 className="font-display text-lg font-bold text-slate-900">
                  {proj.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {proj.tech.split(',').map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500"
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {proj.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}