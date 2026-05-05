import Layout from '../../components/Layout'
import Link from 'next/link'
const { projects } = require('../../data/site')

export default function Project({ project }){
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-6 py-16">
        {project ? (
          <article className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">{project.category}</p>
            <h1 className="mt-3 text-4xl font-heading text-charcoal">{project.title}</h1>
            <p className="mt-4 text-lg leading-8 text-charcoal/75">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags?.map(tag => <span key={tag} className="rounded-full bg-offwhite px-3 py-1 text-xs text-charcoal/70">{tag}</span>)}
            </div>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-offwhite/70 p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">Achievement</dt>
                <dd className="mt-2 text-charcoal">{project.achievement}</dd>
              </div>
              <div className="rounded-2xl bg-offwhite/70 p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">Link</dt>
                <dd className="mt-2 break-words text-charcoal">{project.link || 'Not shared publicly'}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-4">
              {project.link ? <a href={project.link} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-5 py-3 text-white">Open Resource</a> : null}
              <Link href="/projects" className="rounded-full border border-black/10 px-5 py-3 text-charcoal">Back to Projects</Link>
            </div>
          </article>
        ) : (
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <h1 className="text-3xl font-heading text-charcoal">Project not found</h1>
            <p className="mt-4 text-charcoal/70">The requested case study is not available yet.</p>
            <div className="mt-6">
              <Link href="/projects" className="rounded-full bg-primary px-5 py-3 text-white">Back to Projects</Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: projects.map(project => ({ params: { slug: project.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const project = projects.find(item => item.slug === params.slug) || null

  return {
    props: {
      project
    }
  }
}
