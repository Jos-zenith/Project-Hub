import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-offwhite text-charcoal">
      <Head>
        <title>Zenith Joshua — Portfolio</title>
        <meta name="description" content="Engineering tech solutions for everyday South Indian challenges" />
      </Head>
      <header className="sticky top-0 z-20 border-b border-black/5 bg-offwhite/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a className="text-xl font-heading text-primary" href="/">Zenith Joshua</a>
          <div className="rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm">
            Tabbed portfolio
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-12 border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-charcoal/70">
          <div className="mx-auto mb-4 flex max-w-xs justify-center gap-2 opacity-70">
            <span className="h-2 w-2 rounded-full bg-charcoal/50" />
            <span className="h-2 w-2 rounded-full bg-primary/60" />
            <span className="h-2 w-2 rounded-full bg-charcoal/50" />
            <span className="h-2 w-2 rounded-full bg-primary/60" />
            <span className="h-2 w-2 rounded-full bg-charcoal/50" />
          </div>
          © {new Date().getFullYear()} Zenith Joshua
        </div>
      </footer>
    </div>
  )
}
