
import { Award, Trophy } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      icon: <Award className="text-yellow-300" size={22} />,
      title: "INEX Expo Winner",
      desc: "Secured 1st place at INEX Expo for innovative technology demonstration.",
    },
    {
      icon: <Trophy className="text-accent" size={22} />,
      title: "NASSCOM Confluence Finalist",
      desc: "Finalist at NASSCOM Confluence for the Smart Helmet project.",
    },
    {
      icon: <Trophy className="text-accent" size={22} />,
      title: "Multiple Hackathon Wins",
      desc: "Awarded at various national and college-level hackathons for AI/IoT solutions.",
    },
  ];

  return (
    <section
      id="achievements"
      className="w-full max-w-3xl mx-auto mt-10 p-8 rounded-2xl bg-card shadow-glass animate-fade-in"
    >
      <h2 className="text-2xl font-bold text-primary mb-5">Achievements</h2>
      <div className="space-y-5">
        {achievements.map((ach, i) => (
          <div key={i} className="flex items-start gap-4">
            <div>{ach.icon}</div>
            <div>
              <div className="font-semibold text-accent">{ach.title}</div>
              <div className="text-base text-gray-200">{ach.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
