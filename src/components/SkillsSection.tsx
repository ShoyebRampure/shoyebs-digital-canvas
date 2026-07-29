import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Code2, Cpu, BookOpen, Wrench, LucideIcon } from 'lucide-react';

interface SkillCategory {
  key: string;
  label: string;
  icon: LucideIcon;
  items: string[];
}

const categories: SkillCategory[] = [
  {
    key: 'languages',
    label: 'Languages & Frameworks',
    icon: Code2,
    items: [
      'Java',
      'C',
      'Python',
      'Django',
      'Flask',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'SQL',
    ],
  },
  {
    key: 'areas',
    label: 'Technical Areas',
    icon: Cpu,
    items: ['AI / ML', 'RPA', 'Web Dev', 'IoT'],
  },
  {
    key: 'courses',
    label: 'Core Courses',
    icon: BookOpen,
    items: ['DSA', 'DBMS', 'OOPS', 'OS'],
  },
  {
    key: 'tools',
    label: 'Tools & Platforms',
    icon: Wrench,
    items: [
      'AWS Foundation',
      'Azure DevOps',
      'Apache Kafka',
      'Docker',
      'Git',
      'CI/CD (GitHub, Azure)',
      'Oracle DB',
      'MySQL',
      'MongoDB',
    ],
  },
];

const grid = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const cell = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

export function SkillsSection() {
  const [active, setActive] = useState(categories[0].key);
  const current = categories.find((c) => c.key === active)!;

    return (
      <section id="skills" className="font-body w-full bg-transparent">
      {/* Chapter banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-fuchsia-500 to-violet-500 py-16">
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
            <Layers className="h-9 w-9 text-white" strokeWidth={1.5} />
          </motion.div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-violet-100">
              Chapter 3
            </span>
            <h2 className="font-display mt-1 text-4xl font-extrabold text-white sm:text-5xl">
              Skills &amp; Experience
            </h2>
            <p className="mt-1 text-violet-100">
              Technical skills, certifications &amp; hands-on experience
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        {/* Tab bar */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 rounded-2xl border border-violet-100 bg-violet-50/40 p-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`flex h-10 items-center gap-1.5 rounded-xl px-4 text-sm font-semibold transition-colors ${
                active === c.key
                  ? 'bg-white text-violet-700 shadow-sm'
                  : 'text-slate-500 hover:text-violet-600'
              }`}
            >
              <c.icon className="h-4 w-4" strokeWidth={1.75} />
              {c.label}
            </button>
          ))}
        </div>

        {/* Skill pill grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={grid}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 gap-3 rounded-2xl border border-violet-100 bg-white p-6 shadow-sm sm:grid-cols-3"
          >
            {current.items.map((skill) => (
              <motion.div
                key={skill}
                variants={cell}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center rounded-xl border border-violet-100 bg-violet-50/30 px-4 py-3 text-center text-sm font-semibold text-slate-700"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        </div>
    </section>
  );
}