import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Timeline from '../components/Timeline'
import ProjectCard from '../components/ProjectCard'
import StatsMarquee from '../components/StatsMarquee'
import Achievements from '../components/Achievements'
import { blogPosts, communityImpact, experiences, personal, projects, skillProgress, skills, stats, testimonials } from '../data/site'

function BlogCard({ post }) {
  return (
    <article className="group rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-turmeric/15 p-5 transition duration-300 group-hover:scale-[1.01]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">{post.tag}</p>
        <h3 className="mt-3 text-xl font-heading text-charcoal">{post.title}</h3>
        <p className="mt-3 text-sm text-charcoal/75">{post.excerpt}</p>
        <p className="mt-4 font-fun text-base text-primary">{post.tamil}</p>
      </div>
    </article>
  )
}

const tabs = [
  { id: 'overview', label: 'Overview', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'projects', label: 'Projects', icon: '💼' },
  { id: 'experience', label: 'Experience', icon: '⚡' },
  { id: 'skills', label: 'Skills', icon: '🧩' },
  { id: 'achievements', label: 'Achievements', icon: '🏆' },
  { id: 'impact', label: 'Impact', icon: '🌍' },
  { id: 'blog', label: 'Blog', icon: '📝' },
  { id: 'contact', label: 'Contact', icon: '✉️' }
]

function PanelHeading({ title, subtitle }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">{subtitle}</p>
        <h2 className="mt-3 text-3xl font-heading text-charcoal sm:text-4xl">{title}</h2>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')

  const activeLabel = tabs.find(tab => tab.id === activeTab)?.label || 'Overview'

  const renderTabPanel = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid gap-8 pb-8">
            <Hero />
            <StatsMarquee />
            <div className="grid gap-4 rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
              {stats.slice(0, 4).map((stat, i) => (
                <motion.div
                  key={stat}
                  className="rounded-2xl bg-offwhite/70 p-4 text-center"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <div className="text-lg font-heading font-bold text-primary">{stat}</div>
                </motion.div>
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div
                className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">Quick profile</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-charcoal/60">Name</p>
                    <p className="mt-1 font-heading font-bold text-lg text-charcoal">{personal.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/60">Location</p>
                    <p className="mt-1 font-heading font-bold text-lg text-charcoal">{personal.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/60">Email</p>
                    <p className="mt-1 break-words font-heading font-bold text-lg text-charcoal">{personal.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/60">Phone</p>
                    <p className="mt-1 font-heading font-bold text-lg text-charcoal">{personal.phone}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="rounded-[1.75rem] border border-black/5 bg-gradient-to-br from-primary/10 to-turmeric/15 p-6 shadow-sm"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">Portfolio Mode</p>
                <p className="mt-4 text-lg leading-8 text-charcoal/80">
                  This version uses tabs so each story sits in its own panel instead of stacking everything into a long scroll.
                </p>
              </motion.div>
            </div>
          </div>
        )
      case 'about':
        return <About />
      case 'projects':
        return (
          <section>
            <PanelHeading subtitle="Projects" title="Selected work and competition builds." />
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              className="grid gap-6 md:grid-cols-2"
            >
              {projects.map((project, i) => {
                const isFlagship = project.slug === 'parkin-today'
                return (
                  <motion.div
                    key={project.slug}
                    className={isFlagship ? 'md:col-span-2' : ''}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                    }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                )
              })}
            </motion.div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {projects.slice(0, 3).map((project, i) => (
                <motion.div
                  key={`dashboard-${project.slug}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/60">{project.title}</p>
                  <div className={`mt-4 rounded-[1.5rem] bg-gradient-to-br ${project.theme} p-5`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-charcoal">{project.tag}</span>
                      <span className="text-xs font-semibold text-charcoal/60">Dashboard</span>
                    </div>
                    <div className="mt-5 grid gap-3 text-sm text-charcoal/80">
                      <div>
                        <p className="font-semibold text-charcoal">Problem</p>
                        <p className="mt-1 leading-7">{project.problem}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Solution</p>
                        <p className="mt-1 leading-7">{project.solution}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Tech Stack</p>
                        <p className="mt-1 leading-7">{project.techStack.join(', ')}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Impact</p>
                        <p className="mt-1 leading-7">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )
      case 'experience':
        return (
          <section>
            <PanelHeading subtitle="Experience" title="Leadership across hardware, software, and startup execution." />
            <Timeline items={experiences} />
          </section>
        )
      case 'skills':
        return (
          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
              <PanelHeading subtitle="Skills" title="Tech stack, soft skills, and proof of work." />
              <div className="mt-5 grid gap-4">
                {skillProgress.map(skill => (
                  <div key={skill.label} className="group" title={skill.hint}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-charcoal">{skill.label}</span>
                      <span className="text-charcoal/60">{skill.value}%</span>
                    </div>
                    <div className="mt-2 h-3 overflow-hidden rounded-full bg-offwhite">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-turmeric transition-all duration-500 group-hover:shadow-[0_0_18px_rgba(128,0,32,0.25)]" style={{ width: `${skill.value}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-charcoal/60">{skill.hint}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-heading text-primary">Tech Stack Grid</h3>
                <div className="mt-4 grid gap-3 text-sm text-charcoal/80 sm:grid-cols-2">
                  <div className="rounded-2xl bg-offwhite/70 p-4">Python, Java, IoT, Cybersecurity, Full-Stack</div>
                  <div className="rounded-2xl bg-offwhite/70 p-4">Agile, mentoring, design thinking</div>
                  <div className="rounded-2xl bg-offwhite/70 p-4">React, Next.js, TailwindCSS, Node.js</div>
                  <div className="rounded-2xl bg-offwhite/70 p-4">Jira, Trello, AutoCAD, Power BI</div>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-heading text-primary">Certifications</h3>
                <ul className="mt-4 space-y-2 text-sm text-charcoal/75">
                  <li className="flex gap-2"><span className="text-primary">•</span><span>Agile Business Analysis - Udemy</span></li>
                  <li className="flex gap-2"><span className="text-primary">•</span><span>Networks & Network Security - Coursera</span></li>
                  <li className="flex gap-2"><span className="text-primary">•</span><span>Foundations of Cybersecurity - Coursera</span></li>
                  <li className="flex gap-2"><span className="text-primary">•</span><span>Security Risk Management - Coursera</span></li>
                  <li className="flex gap-2"><span className="text-primary">•</span><span>C, MySQL, Java & Python Programming - Skillrack (Hands-on)</span></li>
                </ul>
              </div>
            </div>
          </section>
        )
      case 'achievements':
        return <Achievements />
      case 'impact':
        return (
          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
              <PanelHeading subtitle="Community Impact" title="South Indian context and local problem solving." />
              <div className="mt-5 grid gap-4">
                {communityImpact.map(item => (
                  <div key={item.title} className="rounded-2xl bg-offwhite/60 p-4">
                    <h3 className="font-heading text-lg text-charcoal">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-charcoal/75">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
              <PanelHeading subtitle="Testimonials" title="Peer and community feedback." />
              <div className="mt-5 grid gap-4">
                {testimonials.map(item => (
                  <blockquote key={item.source} className="rounded-2xl border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent p-4">
                    <p className="text-sm leading-7 text-charcoal/80">“{item.quote}”</p>
                    <footer className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">{item.source}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        )
      case 'blog':
        return (
          <section>
            <PanelHeading subtitle="Blog / Insights" title="Short notes on tech for local problems." />
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map(post => (
                <BlogCard key={post.title} post={post} />
              ))}
            </div>
            <div className="mt-6 rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">CMS Ready</p>
              <p className="mt-3 text-charcoal/75">
                This tab can later be wired to Sanity.io or Strapi so the blog previews come from markdown-backed content.
              </p>
            </div>
          </section>
        )
      case 'contact':
        return <Contact />
      default:
        return null
    }
  }

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">Tabbed Portfolio</p>
            <h1 className="mt-3 text-4xl font-heading text-charcoal sm:text-5xl">Zenith Joshua</h1>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-charcoal/75">
              Pick a tab to explore one part of the portfolio at a time.
            </p>
          </div>
          <div className="rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
            {activeLabel}
          </div>
        </div>

        <div className="sticky top-20 z-20 mb-6 rounded-[1.75rem] border border-black/5 bg-white/90 p-2 shadow-sm backdrop-blur">
          <div role="tablist" aria-label="Portfolio sections" className="flex flex-wrap gap-2">
            {tabs.map(tab => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-primary text-white shadow-md' : 'bg-offwhite text-charcoal/75 hover:bg-primary/10 hover:text-primary'}`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="pb-8"
          >
            {renderTabPanel()}
          </motion.div>
        </AnimatePresence>
      </section>
    </Layout>
  )
}
