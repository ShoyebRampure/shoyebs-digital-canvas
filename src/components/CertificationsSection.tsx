import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const headingItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const chip = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const certs = [
  'AWS Foundation',
  'AWS Cloud Practitioner',
  'Generative AI — IBM',
  'AI & ML Basics',
  'UiPath RPA (Multiple Modules)',
  'Python for Data Science',
  'MongoDB for Students',
];

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="font-body w-full bg-transparent px-4 py-16 sm:px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-[1400px]"
      >
        <motion.div variants={headingItem} className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-violet-500">
            Skills &amp; Experience
          </span>
          <h2 className="font-display mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-2 text-slate-500">
            Continuous learning, one course at a time
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {certs.map((cert) => (
            <motion.span
              key={cert}
              variants={chip}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50/50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:bg-white hover:text-violet-700"
            >
              <BadgeCheck className="h-4 w-4 shrink-0 text-violet-500" strokeWidth={1.75} />
              {cert}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};