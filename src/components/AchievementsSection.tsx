import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Presentation, LucideIcon } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface Achievement {
  icon: LucideIcon;
  title: string;
  venue: string;
  description: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: 'Gold Medalist',
    venue: 'INEX — International Invention & Innovation Expo, Goa',
    description: (
      <>
        Represented India and won gold in the AI and Technology domain for
        the{' '}
        <span className="font-semibold text-slate-700">
          DOT — AI-Powered Braille Project
        </span>
        , competing against 20 countries across 15 domains.
      </>
    ),
  },
  {
    icon: Medal,
    title: 'First Prize',
    venue: 'Ideathon, Jyothy Institute of Technology, Bangalore',
    description:
      'Awarded first place out of 80 teams from across Karnataka for an innovative solution.',
  },
  {
    icon: Award,
    title: 'First Prize',
    venue: 'Sparkathon, RajaRajeswari College of Engineering, Bangalore',
    description:
      'Secured top position among 80 teams across Karnataka with a standout project idea.',
  },
  {
    icon: Medal,
    title: '2nd Runner-up',
    venue: 'PEC Hacks 2.0, Panimalar Engineering College, Chennai',
    description: 'Placed 2nd runner-up in a 36-hour intensive hackathon.',
  },
  {
    icon: Presentation,
    title: 'Project Presenter',
    venue: 'NASSCOM Technology Confluence, Bangalore',
    description: (
      <>
        Presented the{' '}
        <span className="font-semibold text-slate-700">DOT</span> project at
        Radisson Blu before senior industry leaders and technologists.
      </>
    ),
  },
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="font-body w-full bg-transparent">
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
            <Trophy className="h-9 w-9 text-white" strokeWidth={1.5} />
          </motion.div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-violet-100">
              Chapter 4
            </span>
            <h2 className="font-display mt-1 text-4xl font-extrabold text-white sm:text-5xl">
              Achievements
            </h2>
            <p className="mt-1 text-violet-100">Wins worth remembering</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-[1400px] space-y-4 px-4 py-16 sm:px-6"
      >
        {achievements.map(({ icon: Icon, title, venue, description }, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-4 rounded-2xl border border-violet-100 bg-white p-6 shadow-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-50">
              <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-base font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-slate-700">
                {venue}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};