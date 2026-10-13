import { intro } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">About</p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal delay={60}>
              <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.03em] text-balance md:text-4xl">
                {intro.headline}
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 max-w-2xl space-y-5">
                {intro.paragraphs.map((p, i) => (
                  <p key={i} className="text-ink-soft text-pretty">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}