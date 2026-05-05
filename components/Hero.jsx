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
          <motion.div
            className="mb-5 inline-flex rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {personal.role}
          </motion.div>
          <motion.h1
            className="max-w-3xl text-5xl font-heading leading-tight text-charcoal sm:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Zenith Joshua
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/80 sm:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            Engineering tech solutions for everyday South Indian challenges.
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-base leading-8 text-charcoal/72"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            {personal.bio}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            <a href="#projects" className="rounded-full bg-primary px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-[#6c001a]">
              Explore My Work
            </a>
            {heroLinks.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-charcoal/20 bg-white px-5 py-3 text-charcoal transition hover:-translate-y-0.5 hover:border-primary hover:text-primary">
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative grid gap-4 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-[1.5rem] bg-gradient-to-br from-primary/10 via-white to-turmeric/20 p-6">
            <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full border border-primary/20 bg-white shadow-inner">
              <div className="text-center">
                <p className="font-fun text-5xl text-primary">ZJ</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-charcoal/50">Portfolio</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-primary/10 to-turmeric/15 p-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-charcoal/50">Location</p>
            <p className="mt-2 text-lg text-charcoal">{personal.location}</p>
            <p className="mt-3 text-sm text-charcoal/70">{personal.institution}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
