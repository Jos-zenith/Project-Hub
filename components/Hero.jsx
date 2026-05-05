import { motion } from 'framer-motion'
import { personal, heroLinks } from '../data/site'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-offwhite via-white to-[#f7efe8]">
      <motion.div
        className="absolute inset-0 opacity-15"
        aria-hidden="true"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(128,0,32,0.12) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute inset-0 opacity-10">
        <img src="/kolam.svg" alt="decorative kolam pattern" className="h-full w-full object-cover" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:py-28">
        <div>
          <motion.h1
            className="font-heading text-5xl font-bold italic leading-tight text-primary sm:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Engineering
            <br />
            <span className="text-charcoal">South Indian</span>
            <br />
            challenges.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/80 sm:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            IoT, AI, and product thinking at the intersection of engineering and empathy — from Chennai to the competition stage.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <a href="#projects" className="rounded-full bg-primary px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-[#6c001a]">
              Explore My Work
            </a>
            {heroLinks.map((link, i) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-charcoal/20 bg-white px-5 py-3 text-charcoal transition hover:-translate-y-0.5 hover:border-primary hover:text-primary" style={{ transitionDelay: `${0.35 + i * 0.05}s` }}>
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative grid gap-4 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="rounded-[1.5rem] bg-gradient-to-br from-primary/10 via-white to-turmeric/20 p-6">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-charcoal/60">Zenith Joshua</p>
              <p className="mt-3 font-heading text-xl font-bold text-charcoal">{personal.institution.split(' ').slice(0, 2).join(' ')}</p>
              <p className="mt-1 text-sm text-charcoal/70">{personal.degree.split(',')[1]?.trim() || personal.degree}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-turmeric/20 px-3 py-1 text-xs font-semibold text-primary">
                <span>📍</span> {personal.location.split(',')[0]}
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-turmeric/10 to-emerald/10 p-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-charcoal/60">Quick Facts</p>
            <div className="mt-3 space-y-2 text-sm text-charcoal/80">
              <div><span className="text-primary">•</span> IT Student @ LICET</div>
              <div><span className="text-primary">•</span> EV Team Lead (22 members)</div>
              <div><span className="text-primary">•</span> 2 Startup Co-Founder</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
