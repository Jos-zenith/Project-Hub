export default function Timeline({ items = [] }){
  return (
    <div className="mx-auto max-w-6xl py-8">
      <style>{`
        .timeline-vertical::before {
          content: '';
          position: absolute;
          left: -16px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #800020, #FFD700, #228B22);
          transform: translateX(-50%);
        }
        .timeline-dot {
          position: absolute;
          left: -24px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #800020;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #800020;
          transform: translateX(-50%);
        }
      `}</style>
      <div className="hidden lg:block">
        <div className="mb-6 h-1.5 rounded-full bg-gradient-to-r from-primary via-turmeric to-emerald" />
        <div className="grid grid-cols-3 gap-5 xl:grid-cols-5">
          {items.map((it, i) => (
            <div key={i} className="relative rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
              <div className="absolute -top-3 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white shadow-md">
                {it.icon || '•'}
              </div>
              <div className="pt-4 text-sm font-semibold uppercase tracking-[0.3em] text-turmeric">{it.date}</div>
              <div className="mt-2 font-heading text-lg font-bold text-charcoal">{it.title}</div>
              {it.role ? <div className="mt-1 text-sm font-medium text-primary">{it.role}</div> : null}
              <div className="mt-3 text-sm leading-7 text-charcoal/75">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <div className="timeline-vertical relative border-l-2 pl-6">
          {items.map((it, i) => (
            <div key={i} className="timeline-dot mb-8 relative rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-xl">{it.icon || '•'} {it.title}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-turmeric">{it.date}</div>
              {it.role ? <div className="mt-1 text-sm font-medium text-primary">{it.role}</div> : null}
              <div className="mt-2 text-sm leading-7 text-charcoal/75">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
