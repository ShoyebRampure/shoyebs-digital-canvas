import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Satellite, ShieldCheck, Code2, LucideIcon, Calendar } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const headingItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface Role {
  icon: LucideIcon;
  category: string;
  title: string;
  company: string;
  duration: string;
  points: string[];
  current?: boolean;
}

const roles: Role[] = [
  {
    icon: Cloud,
    category: 'Cloud & DevOps',
    title: 'Software Engineering Intern',
    company: 'Version1',
    duration: 'November 2025 – January 2026',
    points: [
      'Developing end-to-end production solutions using Azure DevOps and modern full-stack frameworks.',
      'Applying agile and analytical problem-solving to build efficient, scalable systems.',
      'Implementing CI/CD pipelines for automated testing and deployment.',
      'Collaborating with cross-functional teams to design and integrate new features.',
    ],
  },
  {
    icon: Satellite,
    category: 'Navigation Systems',
    title: 'Project Intern',
    company: 'ISRO',
    duration: 'June 2025 – October 2025',
    points: [
      'Navigation and tracking systems development.',
      'Implemented Apache Kafka architecture for real-time data streaming.',
      'Built a monitoring system for one-way ranging using a NavIC reference receiver.',
      'Worked on satellite communication protocols alongside aerospace engineering teams.',
    ],
  },
  {
    icon: ShieldCheck,
    category: 'Cybersecurity',
    title: 'Cyber Security Intern',
    company: 'Theta Dynamics Pvt. Ltd',
    duration: 'August 2024 – October 2024',
    points: [
      'Security threat classification.',
      'Log analysis.',
      'Vulnerability assessments.',
      'Network monitoring.',
    ],
  },
  {
    icon: Code2,
    category: 'Web Development',
    title: 'Web Development Intern',
    company: 'B.N.M Institute of Technology',
    duration: 'June 2024 – July 2024',
    points: [
      'Developed internal web tools and dashboards.',
      'Improved UI/UX using modern design libraries.',
      'Worked on dynamic content rendering with React.',
      'Collaborated on deployment using Git and Netlify.',
    ],
  },
];

export default function InternshipSection() {
  return (
    <section
      id="internship"
      className="font-body w-full bg-transparent px-4 py-16 sm:px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-[1400px]"
      >
        <motion.div variants={headingItem} className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-violet-500">
            Skills &amp; Experience
          </span>
          <h2 className="font-display mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Internships
          </h2>
          <p className="mt-2 text-slate-500">
            Hands-on experience across cloud, aerospace, security &amp; web
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {roles.map(
            ({ icon: Icon, category, title, company, duration, points, current }, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {category}
                  </span>
                  {current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Current
                    </span>
                  )}
                </div>

                <h3 className="font-display mt-4 text-base font-bold text-slate-900">
                  {title}{' '}
                  <span className="font-medium text-violet-600">
                    &middot; {company}
                  </span>
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
                  <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {duration}
                </p>

                <ul className="mt-4 space-y-2">
                  {points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-500"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}