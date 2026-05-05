import { stats } from '../data/site'

export default function StatsMarquee() {
  const marqueeStats = [...stats, ...stats] // Duplicate for seamless loop
  
  return (
    <div className="relative overflow-hidden bg-primary py-4 shadow-sm">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      <div className="marquee-container flex gap-8 whitespace-nowrap px-6">
        {marqueeStats.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm font-semibold text-white sm:text-base"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-turmeric" />
            {stat}
          </div>
        ))}
      </div>
    </div>
  )
}
