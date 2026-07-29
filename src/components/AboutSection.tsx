import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Brain,
  BarChart3,
  Globe,
  Cpu,
  Lightbulb,
  Rocket,
} from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const interests = [
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: BarChart3, label: 'Machine Learning' },
  { icon: Globe, label: 'IoT Applications' },
  { icon: Cpu, label: 'Embedded Systems' },
  { icon: Lightbulb, label: 'Innovation & Patents' },
  { icon: Rocket, label: 'Hackathons' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="font-body w-full bg-transparent">
      {/* Chapter banner — signature storytelling device */}
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
            <GraduationCap className="h-9 w-9 text-white" strokeWidth={1.5} />
          </motion.div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-violet-100">
              Chapter 1
            </span>
            <h2 className="font-display mt-1 text-4xl font-extrabold text-white sm:text-5xl">
              Education
            </h2>
            <p className="mt-1 text-violet-100">Academic background</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Education card */}
          <motion.div
            variants={item}
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm"
          >
            <h3 className="font-display text-lg font-bold text-slate-900">
              Education
            </h3>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-800">
                  B.N.M Institute of Technology
                </p>
                <p className="text-sm text-slate-500">
                  Information Science and Engineering
                </p>
              </div>
              <span className="whitespace-nowrap text-sm text-slate-400">
                2022–2026
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm text-slate-500">CGPA:</span>
              <span className="rounded-full bg-violet-50 px-2.5 py-0.5 text-sm font-semibold text-violet-700">
                9.06
              </span>
            </div>
            <div className="mt-6 rounded-xl border border-violet-100 bg-violet-50/50 p-4 text-sm italic text-slate-500">
              "Focused on real-world problem solving, leveraging AI/ML and
              IoT to design and deliver impactful solutions — shaped by
              professional internships and hackathon experience."
            </div>
          </motion.div>

          {/* Technical interests grid */}
          <motion.div variants={item}>
            <h3 className="font-display mb-4 text-lg font-bold text-slate-900">
              Technical Interests
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {interests.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-violet-100 bg-white px-3 py-5 text-center shadow-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-50">
                    <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};