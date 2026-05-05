import { achievements } from '../data/site'

function AchievementPlace({ place }) {
  const placeMap = { '1st': '🥇', '2nd': '🥈', '3rd': '🥉', '4th': '4️⃣', '5th': '5️⃣', 'Top 10': '🏆' }
  const emoji = placeMap[place] || '✨'
  
  return (
    <div className="flex items-center gap-3">
      <div className="text-4xl font-heading font-bold italic text-primary">
        {place || '✓'}
      </div>
      <span className="text-2xl">{emoji}</span>
    </div>
  )
}

export default function Achievements() {
  const rankedAchievements = achievements.filter(a => a.place)
  const otherAchievements = achievements.filter(a => !a.place)

  return (
    <section className="mx-auto max-w-6xl">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">Recognition</p>
          <h2 className="mt-3 text-3xl font-heading font-bold text-charcoal sm:text-4xl">Competition wins and recognitions.</h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rankedAchievements.map((achievement, i) => (
          <div
            key={i}
            className="group rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <AchievementPlace place={achievement.place} />
            <h3 className="mt-4 text-xl font-heading font-bold text-charcoal">{achievement.competition}</h3>
            <p className="mt-2 text-sm leading-6 text-charcoal/75">{achievement.details}</p>
            <div className="mt-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {achievement.place || 'Recognition'}
            </div>
          </div>
        ))}
      </div>

      {otherAchievements.length > 0 && (
        <div className="mt-12">
          <h3 className="text-lg font-heading font-bold text-charcoal mb-4">Participation & Recognition</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {otherAchievements.map((achievement, i) => (
              <div key={i} className="rounded-2xl border border-black/5 bg-gradient-to-br from-offwhite to-white p-4 shadow-sm">
                <p className="font-semibold text-charcoal">{achievement.competition}</p>
                <p className="mt-2 text-sm text-charcoal/75">{achievement.details}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
