import { about, interests, personal, profileLinks, skills } from '../data/site'

export default function About(){
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">About Me</p>
        <h2 className="mt-3 text-3xl font-heading text-charcoal sm:text-4xl">IT student, startup co-founder, mentor.</h2>
        <p className="mt-4 text-lg leading-8 text-charcoal/75">{about.intro}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-primary/15 via-white to-turmeric/20 p-6">
            <div className="flex min-h-[22rem] flex-col justify-between rounded-[1.5rem] border border-black/5 bg-[radial-gradient(circle_at_top_left,_rgba(128,0,32,0.05),_transparent_55%)] p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60">Portrait</p>
                <div className="mt-6 flex h-52 items-center justify-center rounded-[1.5rem] border border-dashed border-primary/20 bg-white/70">
                  <div className="text-center">
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary text-3xl font-heading text-white shadow-lg">ZJ</div>
                    <p className="mt-4 text-sm text-charcoal/60">Photo placeholder panel</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-charcoal/80">
                <p><strong>Name:</strong> {personal.name}</p>
                <p><strong>Role:</strong> {personal.role}</p>
                <p><strong>Institution:</strong> {personal.institution}</p>
                <p><strong>Location:</strong> {personal.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-heading text-primary">Profile</h3>
            <p className="mt-4 text-base leading-8 text-charcoal/75">{personal.bio}</p>
            <div className="mt-6 grid gap-3 text-sm text-charcoal/80 sm:grid-cols-2">
              <p><strong>Degree:</strong> {personal.degree}</p>
              <p><strong>Email:</strong> <a className="text-primary" href={`mailto:${personal.email}`}>{personal.email}</a></p>
              <p><strong>Phone:</strong> <a className="text-primary" href={`tel:${personal.phone}`}>{personal.phone}</a></p>
              <p><strong>Resume:</strong> <a className="text-primary" href={personal.resume} target="_blank" rel="noreferrer">Open PDF</a></p>
            </div>
          </div>
          <blockquote className="rounded-[1.75rem] border border-primary/15 bg-gradient-to-br from-primary/5 to-turmeric/15 p-6 shadow-sm">
            <p className="font-fun text-2xl leading-10 text-charcoal">“{about.quote}”</p>
          </blockquote>
          <div className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-heading text-primary">Focus Areas</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {interests.map(item => (
                <span key={item} className="rounded-full bg-offwhite px-4 py-2 text-sm text-charcoal/80">{item}</span>
              ))}
            </div>
            <h3 className="mt-8 text-xl font-heading text-primary">Core Skills</h3>
            <div className="mt-4 grid gap-4 text-sm text-charcoal/80 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-charcoal">Programming</p>
                <p className="mt-2 leading-7">{skills.programming.join(', ')}</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Technologies</p>
                <p className="mt-2 leading-7">{skills.technologies.join(', ')}</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Tools</p>
                <p className="mt-2 leading-7">{skills.tools.join(', ')}</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Core Competencies</p>
                <p className="mt-2 leading-7">{skills.coreCompetencies.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a className="rounded-full bg-primary px-4 py-2 text-white" href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="rounded-full border border-primary/20 px-4 py-2 text-primary" href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
        {profileLinks.map(link => (
          <a key={link.label} className="rounded-full border border-black/10 px-4 py-2 text-charcoal/80" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
        ))}
      </div>
    </section>
  )
}
