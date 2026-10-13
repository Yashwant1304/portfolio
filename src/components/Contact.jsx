import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'
import Reveal from './Reveal'

/* Rotating word for the headline */
const ROTATE = ['hello', 'hi there', 'good morning', 'hey']

function Rotator() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROTATE.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      {ROTATE.map((word, idx) => (
        <motion.span
          key={word}
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={false}
          animate={{
            y: idx === i ? '0%' : '110%',
            opacity: idx === i ? 1 : 0,
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-line bg-paper-dim">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Contact</p>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="mt-6 max-w-4xl text-4xl font-medium tracking-[-0.035em] text-balance md:text-6xl">
            <span className="block">
              <Rotator />
              , want to build
              <br className="hidden sm:block" /> something good?
            </span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-paper transition-transform duration-200 hover:-translate-y-0.5"
            >
              {profile.email}
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <a
              href={`${import.meta.env.BASE_URL}${profile.resumeUrl.replace(/^\//, '')}`}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              Résumé
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 border-t border-line pt-6">
            <p className="eyebrow">Direct</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  {profile.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 max-w-md text-sm text-ink-soft">
              I read everything that comes in and reply within a couple of days — even if
              it’s not a fit. {profile.available}.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}