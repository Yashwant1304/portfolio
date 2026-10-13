import { certifications, experience } from '../data'
import Reveal from './Reveal'

/**
 * Education, training and certifications — the timeline that replaced a
 * work history (this portfolio has no job entries yet).
 */
export default function Credentials() {
  return (
    <section id="credentials" className="section">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">Background</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-balance md:text-4xl">
                Where I studied and trained.
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={80}>
              <p className="eyebrow">Education &amp; training</p>
            </Reveal>

            <ol className="mt-6">
              {experience.map((item, i) => (
                <Reveal as="li" key={item.company} delay={i * 80} className="group">
                  <div className="relative border-l border-line pb-8 pl-6 transition-colors last:pb-0 group-hover:border-ink-soft">
                    {/* Node on the timeline */}
                    <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-line transition-colors duration-300 group-hover:bg-accent" />

                    <p className="font-mono text-xs text-ink-soft">{item.period}</p>
                    <p className="mt-2 text-lg font-medium tracking-tight">{item.company}</p>
                    <p className="text-sm text-ink-soft">{item.title}</p>

                    <ul className="mt-3 space-y-1.5">
                      {(item.points ?? []).map((point) => (
                        <li
                          key={point}
                          className="text-sm text-ink-soft before:mr-2 before:text-ink-soft/50 before:content-['—']"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={180}>
              <p className="eyebrow mt-4">Certifications</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <li
                    key={cert.label}
                    className="group rounded-xl border border-line p-4 transition-colors hover:border-ink"
                  >
                    <p className="font-medium tracking-tight">{cert.label}</p>
                    <p className="mt-1 text-sm text-ink-soft">{cert.issuer}</p>
                    <p
                      className="mt-3 text-xs text-ink-soft/60 transition-opacity group-hover:opacity-0"
                      aria-hidden="true"
                    >
                      Certified
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}