import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-sm transition hover:shadow-lg"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="border-b border-black/5 bg-gradient-to-br p-6" style={{ backgroundImage: `linear-gradient(135deg, ${project.headerStart || '#f3f4f6'}, ${project.headerEnd || '#ffffff'})` }}>
        <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">{project.category}</p>
          <h3 className="mt-2 text-xl font-heading text-charcoal">{project.title}</h3>
        </div>
        {project.achievement ? <span className="rounded-full bg-turmeric/15 px-3 py-1 text-xs font-semibold text-[#8a6500]">{project.achievement}</span> : null}
      </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map(tag => (
            <span key={tag} className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-charcoal/75 shadow-sm">{tag}</span>
          ))}
        </div>
      </div>
      <div className="grid gap-4 p-6 text-sm text-charcoal/75">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">Problem</p>
          <p className="mt-2 leading-7">{project.problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">Solution</p>
          <p className="mt-2 leading-7">{project.solution}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">Tech Stack</p>
          <p className="mt-2 leading-7">{project.techStack.join(', ')}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">Impact</p>
          <p className="mt-2 leading-7">{project.impact}</p>
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-4 border-t border-black/5 px-6 py-5 text-sm">
        <a href={`/projects/${project.slug}`} className="font-medium text-primary">Read Case Study →</a>
        {project.link ? <a href={project.link} target="_blank" rel="noreferrer" className="font-medium text-charcoal/70 hover:text-primary">Open Link</a> : null}
      </div>
    </motion.article>
  )
}
