import { motion, useReducedMotion } from 'framer-motion'
import { profile, nav } from '../data'

export default function Hero() {
  const reduce = useReducedMotion()

  const fade = (delay) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="shell">
        <motion.p className="eyebrow" {...fade(0)}>
          {profile.location} · {profile.available}
        </motion.p>

        <motion.h1
          className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.03em] text-balance md:text-6xl"
          {...fade(0.08)}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-lg text-ink-soft text-pretty md:text-xl"
          {...fade(0.16)}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          {...fade(0.24)}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-transform duration-200 hover:-translate-y-0.5"
          >
            See selected work
            <span
              className="transition-transform duration-200 group-hover:translate-y-0.5"
              aria-hidden="true"
            >
              ↓
            </span>
          </a>

          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-ink">
                {s.label}
              </span>
              <span className="ml-1.5 font-mono text-xs opacity-60">{s.handle}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="shell mt-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-3">
          <span className="eyebrow">Scroll</span>
          <div className="relative h-px flex-1 bg-line">
            <div className="absolute inset-y-0 left-0 w-1/4 animate-[pulse_2.4s_ease-in-out_infinite] bg-ink" />
          </div>
          <span className="eyebrow">{nav.length} sections</span>
        </div>
      </motion.div>
    </section>
  )
}