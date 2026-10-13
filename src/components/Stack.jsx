import { useState } from 'react'
import { stackGroups } from '../data'
import Reveal from './Reveal'

function Chip({ label }) {
  const [hot, setHot] = useState(false)

  return (
    <button
      type="button"
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
      onFocus={() => setHot(true)}
      onBlur={() => setHot(false)}
      aria-pressed={hot}
      className={`rounded-full border px-3.5 py-1.5 text-sm transition-all duration-200 ${
        hot
          ? 'border-ink bg-ink text-paper'
          : 'border-line bg-paper text-ink-soft hover:border-ink-soft'
      }`}
    >
      {label}
    </button>
  )
}

export default function Stack() {
  return (
    <section id="stack" className="section border-t border-line bg-paper-dim">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <Reveal>
              <p className="eyebrow">Stack</p>
              <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-balance">
                Tools I reach for.
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <div className="space-y-8">
              {stackGroups.map((group, i) => (
                <Reveal key={group.label} delay={i * 60}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft/70">
                    {group.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip key={item} label={item} />
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}