export default function Timeline({ items = [] }){
  return (
    <div className="mx-auto max-w-6xl py-8">
      <div className="hidden lg:block">
        <div className="mb-6 h-1 rounded-full bg-gradient-to-r from-primary via-turmeric to-emerald opacity-70" />
        <div className="grid grid-cols-3 gap-5 xl:grid-cols-5">
          {items.map((it, i) => (
            <div key={i} className="relative rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
              <div className="absolute -top-3 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white shadow-md">
                {it.icon || '•'}
              </div>
              <div className="pt-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary/60">{it.date}</div>
              <div className="mt-2 font-heading text-lg text-charcoal">{it.title}</div>
              {it.role ? <div className="mt-1 text-sm font-medium text-primary">{it.role}</div> : null}
              <div className="mt-3 text-sm leading-7 text-charcoal/75">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <div className="border-l-2 border-primary/20 pl-6">
          {items.map((it, i) => (
            <div key={i} className="mb-8 rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-xl">{it.icon || '•'} {it.title}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary/60">{it.date}</div>
              {it.role ? <div className="mt-1 text-sm font-medium text-primary">{it.role}</div> : null}
              <div className="mt-2 text-sm leading-7 text-charcoal/75">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
