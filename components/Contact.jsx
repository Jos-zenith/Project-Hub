import { personal, profileLinks } from '../data/site'
import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    const fd = new FormData(e.target)
    const body = Object.fromEntries(fd)
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(body)})
      if(res.ok){ setStatus('sent'); e.target.reset() } else { setStatus('error') }
    }catch(err){ setStatus('error') }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">Contact</p>
          <h2 className="mt-3 text-3xl font-heading text-charcoal sm:text-4xl">Open to collaboration, internships, product work, and ambitious builds.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-charcoal/75">
            For collaborations, consulting, speaking, or project discussions, reach out directly or use the form below.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-charcoal/80 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-charcoal">Email</p>
              <a className="mt-1 block text-primary" href={`mailto:${personal.email}`}>{personal.email}</a>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-charcoal">Phone</p>
              <a className="mt-1 block text-primary" href={`tel:${personal.phone}`}>{personal.phone}</a>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-charcoal">LinkedIn</p>
              <a className="mt-1 block text-primary" href={personal.linkedin} target="_blank" rel="noreferrer">Profile link</a>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-charcoal">GitHub</p>
              <a className="mt-1 block text-primary" href={personal.github} target="_blank" rel="noreferrer">Source work</a>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {profileLinks.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-charcoal/80 shadow-sm hover:border-primary hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-3 rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-heading text-primary">Send a message</h3>
          <input name="name" placeholder="Your name" required className="rounded-2xl border border-black/10 bg-offwhite/60 p-3 outline-none transition focus:border-primary" />
          <input name="email" placeholder="Your email" required className="rounded-2xl border border-black/10 bg-offwhite/60 p-3 outline-none transition focus:border-primary" />
          <textarea name="message" placeholder="Message" required className="rounded-2xl border border-black/10 bg-offwhite/60 p-3 outline-none transition focus:border-primary" rows="6" />
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button type="submit" className="rounded-full bg-primary px-5 py-3 text-white transition hover:bg-[#6c001a]">Send</button>
            {status === 'sending' && <span className="text-sm text-charcoal/60">Sending...</span>}
            {status === 'sent' && <span className="text-sm text-emerald">Message sent - thanks!</span>}
            {status === 'error' && <span className="text-sm text-red-600">Error sending message</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
