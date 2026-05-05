import Layout from '../../components/Layout'
import Link from 'next/link'
const { projects } = require('../../data/site')

export default function ProjectsList(){
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">Projects</p>
        <h2 className="mt-3 text-3xl font-heading text-charcoal sm:text-4xl">A complete view of the engineering, startup, and competition work.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(p => (
            <article key={p.slug} className="flex h-full flex-col rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">{p.category}</p>
              <h3 className="mt-2 text-xl font-heading text-charcoal">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags?.map(tag => <span key={tag} className="rounded-full bg-offwhite px-3 py-1 text-xs text-charcoal/70">{tag}</span>)}
              </div>
              <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm">
                {p.link ? <a className="font-medium text-primary" href={p.link} target="_blank" rel="noreferrer">Live / Resources</a> : null}
                <Link href={`/projects/${p.slug}`} className="font-medium text-charcoal/70 hover:text-primary">Case Study →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
