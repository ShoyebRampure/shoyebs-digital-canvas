

export function AchievementsSection() {
  const achievements = [
    {
      title: "Gold Medal: INEX Expo (AI category)",
      desc: "for DOT project",
    },
    {
      title: "Presenter: NASSCOM Tech Confluence",
      desc: "",
    },
    {
      title: "Winner: INEX Ideathon, Sparkathon",
      desc: "2nd runner-up at PEC Hacks",
    },
    {
      title: "Participated in multiple hackathons, workshops, conferences",
      desc: "",
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
            <div>
              <span className="font-semibold text-accent">{ach.title}</span>
              {ach.desc && <span className="block text-base text-gray-200">{ach.desc}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
